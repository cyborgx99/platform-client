import { isInViewport, isNotInViewport } from '../../utils';

describe('Navbar and navigation links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open and close navbar', () => {
    isNotInViewport('[data-cy-nav]');

    cy.get('[data-cy-icon="Show navbar"]').click();

    isInViewport('[data-cy-nav]');

    cy.get('[data-cy-icon="Close navbar"]').click();

    isNotInViewport('[data-cy-nav]');
  });

  it('Should navigate to login page', () => {
    cy.get('[data-cy-icon="Show navbar"]').click();

    cy.get('[data-cy-nav-link="/login"]').click();

    cy.url().should('include', '/login');
  });

  it('Should navigate to sign up page', () => {
    cy.get('[data-cy-icon="Show navbar"]').click();

    cy.get('[data-cy-nav-link="/sign-up"]').click();

    cy.url().should('include', '/sign-up');
  });
});
