// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.visit('http://localhost:3000/auth');
    cy.get('input[placeholder="Юзернейм"]').type('arbuzarbuz');
    cy.get('input[placeholder="Пароль"]').type('12345678');
    cy.get('button').contains('Увійти').click();
    cy.window().its('localStorage.token').should('exist'); 
 });



Cypress.Commands.add('generateRandomUsername', () => {
    const username = `user_${Math.floor(Math.random() * 10000)}`;
    return username;  // Ensure it's a string
  });
  