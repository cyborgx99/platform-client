declare namespace Cypress {
  interface Chainable {
    resetTestDatabase(): Chainable<Element>;
    userLoginRequest(email: string, password: string): void;
    login(email: string, password: string): void;
    paste(pastePayload: string): Chainable<Element>;
  }
}
