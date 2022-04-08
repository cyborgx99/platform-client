describe('Dashboard as teacher', () => {
  beforeEach(() => {
    // Login with teacher credentials
    cy.login('cyborgx999@gmail.com', '123qwe');
  });

  it('Should be able to navigate to different dashboard tabs', () => {
    //default tab is user
    cy.url().should('include', '/dashboard/user');

    cy.get('[data-cy-tab-link]').contains('Lesson').click();

    cy.url().should('include', '/dashboard/lesson');

    cy.get('[data-cy-tab-link]').contains('Classroom').click();

    cy.url().should('include', '/dashboard/classroom');
  });
});
