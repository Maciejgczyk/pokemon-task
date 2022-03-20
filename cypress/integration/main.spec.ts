// cypress/integration/spec.ts

import type = Mocha.utils.type;

describe('check if card is created', () => {
  it('should generate cards', () => {
    cy.visit('')

    cy.get('.container__card')
      .find('img').should('be.visible');
  });

  it('change pokemon data', () => {
    cy.visit('/main/pl3-1')

    cy.get('.container__form--input').eq(0).type('Testing')
    cy.get('.container__form--input').eq(1).type('Testing')
    cy.get('.container__form--input').eq(2).type('Testing')

    cy.get('.container__form--button').click();
  });
});
