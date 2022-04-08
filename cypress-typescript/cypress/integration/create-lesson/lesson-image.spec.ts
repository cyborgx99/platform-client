import { isInViewport } from '../../utils';

describe('Lesson image frow flow (only for teachers)', () => {
  beforeEach(() => {
    cy.resetTestDatabase();
    // teacher credentials
    cy.login('cyborgx999@gmail.com', '123qwe');
    cy.visit('/create-lesson/image');
  });

  it('Can upload an image via url', () => {
    const validImageUrl =
      'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    const title = 'New Image';

    cy.get('[data-cy-icon="Add image"]').click();
    isInViewport('[data-cy-modal]').within(() => {
      cy.get('input[name="url"]').type(validImageUrl);

      cy.get('[alt="Preview"]', { timeout: 10000 })
        .should('be.visible')
        .and(($img: JQuery<HTMLImageElement>) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

      cy.get('input[name="title"]').type(title);

      cy.get('button[data-cy-button][type="submit"]').click();

      cy.contains('Success!', { timeout: 10000 }).should('be.visible');

      cy.get('button[data-cy-button][type="button"]')
        .contains('Continue')
        .click();

      cy.get('[data-cy-icon="Close modal"]').click();
    });

    cy.get('[data-cy-card]')
      .contains('h3', title)
      .parent()
      .find('img')
      .should('have.attr', 'src', validImageUrl);
  });

  it('Can upload an image via file input', () => {
    cy.get('[data-cy-icon="Add image"]').click();

    const title = 'Uploaded from folder';
    const fixtureFile = 'images/dog.jpg';

    isInViewport('[data-cy-modal]').within(() => {
      cy.get('[type="button"]').contains('upload').click();

      cy.get('input[type="file"]').attachFile(fixtureFile);

      cy.get('input[name="title"]').type(title);

      cy.get('button[data-cy-button][type="submit"]').click();

      cy.contains('Success!', { timeout: 10000 }).should('be.visible');

      cy.get('button[data-cy-button][type="button"]')
        .contains('Continue')
        .click();

      cy.get('[data-cy-icon="Close modal"]').click();
    });

    cy.get('[data-cy-card]').contains('h3', title);
  });

  it('Can edit an existing lesson image', () => {
    cy.findByText('My Image')
      .parents('[data-cy-card]')
      .within(() => {
        cy.findByText('Edit').click();
      });
  });
});
