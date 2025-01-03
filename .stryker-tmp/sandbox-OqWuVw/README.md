### Вибір стилю коду

Для підтримки єдиного стилю коду в проєкті ми використовуємо **Prettier** як форматер. Prettier автоматично відформатує код за стандартами, що дозволяє команді дотримуватись єдиного стилю без необхідності вручну перевіряти відступи, розриви рядків або використання лапок. Вибір Prettier базується на його простоті та широкому використанні в спільноті, що забезпечує зручність для великих команд.

### Налаштування форматтера

Для форматування коду використовується **Prettier**. Цей інструмент автоматично виправляє проблеми зі стилем коду, такі як:

- відступи
- форматування рядків
- позиція фігурних дужок
- використання лапок (одинарних або подвійних)
- пробіли між елементами та інше

Prettier підтримує різні типи файлів, такі як **JavaScript**, **TypeScript**, **CSS**, **JSON**, **HTML** і **Markdown**, що дозволяє легко форматувати код на різних рівнях проєкту.

### Налаштування лінтера або іншого статичного аналізатора

Для статичного аналізу та перевірки якості коду ми використовуємо **ESLint**. ESLint допомагає виявляти потенційні помилки в коді, недотримання стандартів стилю або навіть антипатерни програмування. Ми налаштовуємо його для роботи з **JavaScript** або **TypeScript**, а також можемо додавати спеціальні плагіни для перевірки коду в специфічних фреймворках чи бібліотеках (наприклад, React).

Основні функції ESLint:

- Виявлення синтаксичних помилок у коді
- Перевірка використання змінних
- Дотримання стандартів написання коду (наприклад, правила для відступів, використання крапок з комами тощо)
- Можливість інтеграції з IDE для надання зворотного зв'язку під час написання коду

### Налаштування Git-hook на комміт та пуш

Для автоматизації процесу перевірки коду перед комітом і пушем ми використовуємо **Husky** та **lint-staged**.

1. **Husky** дозволяє налаштувати Git hooks (сценарії, що виконуються під час певних дій з Git, наприклад, перед комітом або пушем). Це забезпечує автоматичну перевірку коду без необхідності вручну запускати інструменти перевірки.

2. **lint-staged** обмежує запуск лінтера та форматтера лише на тих файлах, які були змінені, що дозволяє значно зекономити час, не перевіряючи весь проєкт.

Налаштування включає:

- **Pre-commit hook**: перевірка та автоматичне форматування змінених файлів за допомогою Prettier.
- **Pre-push hook**: перед пушем можна налаштувати виконання тестів, збірки проєкту або перевірку лінтером, щоб переконатися, що тільки відформатований і без помилок код потрапляє в основну гілку.

### Перевірка форматування, лінтер, тести, збірка/компіляція проекту

Під час налаштування Git hooks ми можемо автоматично запускати кілька перевірок:

- **Перевірка форматування**: перед комітом автоматично запускається форматування коду за допомогою Prettier, щоб переконатися, що весь код відповідає обраному стилю.
- **Лінтер**: ESLint перевіряє код на наявність помилок та невідповідностей стилю. Це допомагає зберігати високу якість коду та виявляти проблеми на ранніх етапах.
- **Тести**: для перевірки коректності роботи коду можуть бути налаштовані тести, які будуть виконуватись перед пушем.
- **Збірка/компіляція**: перед пушем або під час CI/CD процесу можна запускати збірку проєкту, щоб переконатись, що код успішно компілюється.

### Загальний процес

1. Кожен раз перед комітом запускаються наступні перевірки:
   - **Форматування** за допомогою Prettier.
   - **Лінтинг** за допомогою ESLint.
2. Перед пушем виконуються:
   - **Тести**, щоб перевірити коректність роботи коду.
   - **Збірка проєкту** для перевірки, чи компілюється код без помилок.

## Діаграма компонентів ПЗ

![Діаграма компонентів ПЗ](./public/assets/diagram.png)

## Дані та їх зв’язки

![Дані та їх зв’язки](./public/assets/er.png)

## Опис як дані оновлюються\змінюються\агрегуються на основі ключових сценаріїв, які виконує додаток

---

### 1. **Реєстрація користувача (SignUp)**

Реєстрація користувача передбачає створення нового облікового запису в системі. Користувач вводить своє ім'я користувача (username), пароль та підтверджує пароль. Якщо паролі не співпадають або пароль занадто короткий, система виводить відповідні помилки. Після успішної реєстрації, користувач отримує повідомлення про створення акаунта.

#### Ключові моменти:

- Перевірка наявності користувача з таким самим ім'ям.
- Шифрування пароля перед збереженням.
- Використання JWT для подальшої авторизації.

---

### 2. **Авторизація користувача (Auth)**

Користувач вводить свої облікові дані (ім'я користувача та пароль). Система перевіряє правильність введених даних. Якщо авторизація успішна, сервер генерує токен доступу (JWT), який зберігається в `localStorage`. Якщо дані неправильні, виводиться повідомлення про помилку.

#### Ключові моменти:

- Перевірка користувача та пароля.
- Генерація та зберігання токену JWT для подальшого доступу.
- Перенаправлення користувача на головну сторінку після успішної авторизації.

---

### 3. **Прогноз ціни нерухомості (DataInput)**

Користувач вводить дані про нерухомість (район, поверх, кількість поверхів, кількість кімнат та площа). На основі цих даних система прогнозує ціну. Після підтвердження форми, відправляються дані на сервер для прогнозу ціни та збереження історії.

#### Ключові моменти:

- Форма вводу даних з перевірками на валідність.
- Виведення прогнозованої ціни на основі наданих даних.
- Надсилання прогнозу на сервер та збереження результатів у базі даних.

---

### 4. **Data Input (Форма вводу даних для прогнозу ціни)**

Цей компонент відповідає за форму, в якій користувач вводить інформацію про нерухомість. Він включає в себе:

- Перевірку на правильність введених даних (наприклад, перевірка на правильний діапазон чисел).
- Після натискання кнопки "Підтвердити" відправка даних на сервер для отримання прогнозу ціни.

#### Ключові моменти:

- Обробка введених даних через `useState` та `useEffect`.
- Виведення помилок при неправильному заповненні.
- Завантаження прогнозу ціни після обробки форми.

---

### 5. **Історія прогнозів ціни (History)**

Користувач може переглядати історію прогнозів цін, яка зберігається в базі даних. Для цього потрібно авторизуватися, а потім отримати список всіх прогнозів, які були збережені для цього користувача. Дані включають район, поверх, кількість кімнат, площу, а також прогнозовану ціну.

#### Ключові моменти:

- Отримання історії прогнозів з бази даних за допомогою API.
- Перевірка авторизації користувача через JWT.
- Виведення історії прогнозів на інтерфейс.

---
