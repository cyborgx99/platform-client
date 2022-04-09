Cypress.Commands.add('userLoginRequest', (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3001/graphql',
    form: true,
    retryOnStatusCodeFailure: true,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      query: `mutation SignIn($input: SignInInput!) {
              signIn(input: $input) {
                success
              }
            }`,
      variables: {
        input: { email, password },
      },
    },
  }).then(() => {
    cy.visit('/dashboard');
  });
});
