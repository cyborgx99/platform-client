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
      'https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg';
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
    const oldTitle = 'My Image';

    const newTitle = 'New Title';

    const newUrl =
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg';

    cy.findByText(oldTitle)
      .parents('[data-cy-card]')
      .within(() => {
        cy.findByText('Edit').click();
      });

    isInViewport('[data-cy-modal]').within(() => {
      cy.get('input[name="title"]').clear().type(newTitle);
      cy.get('input[name="url"]').clear().type(newUrl);

      cy.get('[alt="Preview"]', { timeout: 10000 })
        .should('be.visible')
        .and(($img: JQuery<HTMLImageElement>) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

      cy.get('button[data-cy-button][type="submit"]').click();

      cy.contains('Your lesson image has been updated.', {
        timeout: 10000,
      }).should('be.visible');

      cy.get('button[data-cy-button][type="button"]')
        .contains('Continue')
        .click();

      cy.get('[data-cy-icon="Close modal"]').click();
    });

    cy.findByText(newTitle)
      .parents('[data-cy-card]')
      .within(() => {
        cy.get('img').should('have.attr', 'src', newUrl);
      });
  });

  it('Can delete an existing lesson image', () => {
    const title = 'My Image';
    cy.findByText(title)
      .parents('[data-cy-card]')
      .within(() => {
        cy.findByText('Delete').click();
      });

    isInViewport('[data-cy-modal]').within(() => {
      cy.get('button[data-cy-button][type="button"]').click();
    });

    cy.findByText(title).should('not.exist');
  });
});
