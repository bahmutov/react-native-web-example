/// <reference types="cypress" />

it('loads', () => {
  cy.visit('/')
  cy.textByRole('button', 'Example button')
  cy.textByRole('link', 'Create React App')
  cy.byRole('link').should('contain', 'Create React App')
})
