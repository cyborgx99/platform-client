declare namespace Cypress {
  interface Chainable {
    isNotInViewport(selector: string): void;
  }
}
