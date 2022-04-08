Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);

  cy.get('button[data-cy-button][type="submit"]').click();
  cy.url().should('contain', '/dashboard');
});
