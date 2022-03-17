export function isInViewport(selector: string) {
  cy.get(selector).then(($el) => {
    cy.window().then((window) => {
      const message = `Expected to find element with selector ${selector} in viewport`;
      const { documentElement } = window.document;
      const bottom = documentElement.clientHeight;
      const right = documentElement.clientWidth;
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.lessThan(bottom, message);
      expect(rect.bottom).to.be.gte(0, message);
      expect(rect.right).to.be.gte(0, message);
      expect(rect.left).to.be.lessThan(right, message);
    });
  });
  return cy.get(selector);
}
