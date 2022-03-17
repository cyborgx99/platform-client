export function isNotInViewport(selector: string) {
  cy.get(selector).then(($el) => {
    cy.window().then((window) => {
      const message = `Did not expect to find element with $selector ${selector} in viewport`;
      const { documentElement } = window.document;
      const bottom = documentElement.clientHeight;
      const right = documentElement.clientWidth;
      const rect = $el[0].getBoundingClientRect();

      expect(rect).to.satisfy(
        (rect) =>
          rect.top < 0 ||
          rect.top > bottom ||
          rect.left < 0 ||
          rect.left > right,
        message
      );
    });
  });
  return cy.get(selector);
}
