describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  describe('Checks sign up form validation', () => {
    it('Shows errors for required fields', () => {
      cy.get('button[data-cy-button][type="submit"]').click();
      cy.get('[data-cy-error]')
        .should('have.length', 5)
        .each(($element) => {
          expect($element).to.contain('The field is required.');
        });
    });

    it('Validates lenght restrictions', () => {
      cy.get('[data-cy-error="name"]')
        .contains('Must be at least 2 characters long.')
        .should('not.exist');

      cy.get('[data-cy-error="lastName"]')
        .contains('Must be at least 2 characters long.')
        .should('not.exist');

      cy.get('input[name="name"]').type('J');
      cy.get('input[name="lastName"]').type('L').blur();

      cy.get('[data-cy-error="name"]')
        .contains('Must be at least 2 characters long.')
        .should('exist');

      cy.get('[data-cy-error="lastName"]')
        .contains('Must be at least 2 characters long.')
        .should('exist');

      cy.get('input[name="name"]')
        .clear()
        .type('Verylongnamethatsbiggerthanthirtrytwocharacters');

      cy.get('input[name="lastName"]')
        .clear()
        .type('Verylongnamethatsbiggerthanthirtrytwocharacters')
        .blur();

      cy.get('[data-cy-error="name"]')
        .contains('Must be less than 32 characters.')
        .should('exist');

      cy.get('[data-cy-error="lastName"]')
        .contains('Must be less than 32 characters.')
        .should('exist');

      cy.get('input[name="name"]').clear().type('Jonny');
      cy.get('input[name="lastName"]').clear().type('Cage').blur();

      cy.get('[data-cy-error="name"]')
        .contains('Must be less than 32 characters.')
        .should('not.exist');

      cy.get('[data-cy-error="lastName"]')
        .contains('Must be less than 32 characters.')
        .should('not.exist');
    });

    it('Validates email field', () => {
      cy.get('input[name="email"]').type('123qwe').blur();

      cy.get('[data-cy-error="email"]')
        .contains('Must be a valid email.')
        .should('exist');

      cy.get('input[name="email"]').clear().type('realemail@gmail.com');

      cy.get('[data-cy-error="email"]')
        .contains('Must be a valid email.')
        .should('not.exist');
    });

    it('Validates password fields', () => {
      cy.get('input[name="password"]').type('weak').blur();

      cy.get('[data-cy-error="password"]')
        .contains('Must have at least 6 characters, one letter, and one digit.')
        .should('exist');

      cy.get('input[name="password"]').clear().type('strong123').blur();

      cy.get('[data-cy-error="password"]')
        .contains('Must have at least 6 characters, one letter, and one digit.')
        .should('not.exist');

      cy.get('input[name="confirmPassword"]')
        .clear()
        .type('does not match')
        .blur();

      cy.get('[data-cy-error="confirmPassword"]')
        .contains('Passwords must match.')
        .should('exist');

      cy.get('input[name="confirmPassword"]').clear().type('strong123').blur();

      cy.get('[data-cy-error="confirmPassword"]')
        .contains('Passwords must match.')
        .should('not.exist');
    });
  });

  describe('Sign up flow', () => {
    beforeEach(() => {
      cy.resetTestDatabase();
      cy.visit('/sign-up');
    });

    it('Allows user to sign up', () => {
      cy.get('input[name="name"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="email"]').type('johndoe@gmail.com');
      cy.get('input[name="password"]').type('strong123');
      cy.get('input[name="confirmPassword"]').type('strong123');

      cy.get('button[data-cy-button][type="submit"]').click();

      cy.contains('Account Created!').should('exist');
      cy.get('button[data-cy-button][type="button"]')
        .contains('Continue')
        .should('exist');
    });
  });
});
