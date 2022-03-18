Cypress.Commands.add('resetTestDatabase', () => {
  const command = 'cd ../../platform-server && yarn test:reset';

  // Make sure we don't end up on a page that doesn't exist anymore after the
  // reset. This would cause authentication errors
  cy.visit('/');

  if (Cypress.platform !== 'win32') {
    cy.task('execWithTimeoutOutput', command, { timeout: 120000 })
      .then((output) => {
        if (output) cy.log(output as string);
      })
      .then((output) => {
        if (output) throw new Error('Seeding timed out.');
      });
  } else {
    cy.exec(command);
  }
});
