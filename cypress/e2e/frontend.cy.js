describe('Main page tests with data input', () => {
  it('should visit the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Вітаємо у PriceRoom!');
  });
});

describe('SignUp Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });

  it('should successfully sign up a user with valid credentials', () => {
    // Generate the random username
    cy.generateRandomUsername().then((randomUsername) => {
      cy.get('input[placeholder="Юзернейм"]').type(randomUsername); // Type the random username
      cy.get('input[placeholder="Пароль"]').type('password123'); // Type the password
      cy.get('input[placeholder="Підтвердити пароль"]').type('password123'); // Type the confirm password
      cy.get('button').contains('Зареєструватись').click(); // Submit the form
      cy.contains('Користувача було створено!'); // Check for success message
    });
  });

  it('should visit the SignUp page and display the correct title', () => {
    cy.contains('Зареєструватись');
  });

  it('should display an error if the passwords do not match', () => {
    cy.get('input[placeholder="Юзернейм"]').type('teste2e');
    cy.get('input[placeholder="Пароль"]').type('password123');
    cy.get('input[placeholder="Підтвердити пароль"]').type('password1234');
    cy.get('button').contains('Зареєструватись').click();
    cy.contains('Паролі не є однаковими.'); // Check for error message
  });

  it('should display an error if the password is too short', () => {
    cy.get('input[placeholder="Юзернейм"]').type('teste2e');
    cy.get('input[placeholder="Пароль"]').type('pass');
    cy.get('input[placeholder="Підтвердити пароль"]').type('pass');
    cy.get('button').contains('Зареєструватись').click();
    cy.contains('Пароль має бути довжиною мінімум у 8 символів.'); // Check for error message
  });

  it('should redirect to home page if user is already logged in', () => {
    // Set token to simulate that the user is already logged in
    localStorage.setItem('token', 'fake-token');
    cy.visit('http://localhost:3000/signup');
    cy.url().should('include', '/'); // Check if redirected to home page
  });
});

describe('Auth Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth');
  });

  it('should visit the Auth page and display the correct title', () => {
    cy.contains('Вітаємо у PriceRoom!'); // Check for title
  });

  it('should display error message for incorrect login credentials', () => {
    cy.get('input[placeholder="Юзернейм"]').type('wrongUser'); // Input wrong username
    cy.get('input[placeholder="Пароль"]').type('wrongPassword'); // Input wrong password
    cy.get('button').contains('Увійти').click();
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('input[placeholder="Юзернейм"]').type('arbuzarbuz'); // Input valid username
    cy.get('input[placeholder="Пароль"]').type('12345678'); // Input valid password
    cy.get('button').contains('Увійти').click(); // Click login button

    // After login, check if redirected to home page and token is saved in localStorage
    cy.url().should('include', '/');
    cy.window().its('localStorage.token').should('exist'); // Check if token exists in localStorage
  });

  it('should redirect to signup page when user clicks on the sign-up link', () => {
    cy.get('p.auth-signup-text').contains('Зареєструватись').click(); // Click sign-up link
    cy.url().should('include', '/signup'); // Check if redirected to the signup page
  });

  it('should redirect to home if user is already logged in', () => {
    // Simulate a logged-in user by setting a token in localStorage
    localStorage.setItem('token', 'fake-token');

    cy.visit('http://localhost:3000/auth'); // Visit the auth page
    cy.url().should('include', '/'); // Should redirect to home page if already logged in
  });
});

describe('Data Input Page Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/auth');
    cy.login(); 
  });

  it('should load the Data Input page correctly', () => {
    cy.contains('Прогнозуйте ціну нерухомості');
  });

  it('should validate form inputs and show error messages for empty fields', () => {
    cy.get('button[type="submit"]').click(); // Attempt to submit without filling out the form

    // Check for error messages on required fields
    cy.contains("Це поле обов'язкове").should('exist');
    cy.contains('Поверх має бути в межах від 1 до 100').should('exist');
    cy.contains(
      'Загальна кількість поверхів має бути в межах від 1 до 100',
    ).should('exist');
    cy.contains('Кількість кімнат має бути в межах від 1 до 10').should(
      'exist',
    );
    cy.contains('Площа має бути в межах від 1 до 1000 м²').should('exist');
  });

  it('should input valid data and submit the form', () => {
    cy.get('select[name="district"]').select('Деснянський');
    cy.get('input[name="floor"]').clear().type('3');
    cy.get('input[name="floors_count"]').clear().type('10');
    cy.get('input[name="rooms_count"]').clear().type('4');
    cy.get('input[name="total_square_meters"]').clear().type('80');

    cy.get('button[type="submit"]').click();

    // Check for the loading state
    cy.contains('Завантаження...');

    // Check for the predicted price after successful form submission
    cy.contains('Прогнозована ціна:').should('exist');
  });

  it('should show error message if API request fails', () => {
    // Simulate an API failure response
    cy.intercept('POST', 'http://98.83.92.105:8000/api/predict-price/', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    });

    cy.get('select[name="district"]').select('Деснянський');
    cy.get('input[name="floor"]').clear().type('3');
    cy.get('input[name="floors_count"]').clear().type('10');
    cy.get('input[name="rooms_count"]').clear().type('4');
    cy.get('input[name="total_square_meters"]').clear().type('80');

    cy.get('button[type="submit"]').click();
    
    cy.contains('Не вдалося отримати прогноз ціни або зберегти дані.').should(
      'exist',
    );
  });

  it('should redirect to login page if no token is available', () => {
    localStorage.removeItem('token');

    cy.visit('http://localhost:3000/');
    cy.url().should('include', '/auth');
  });
});
