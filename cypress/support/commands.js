// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const rs = (role) => `[role=${role}]`

Cypress.Commands.add('byRole', (role) => {
  return cy.get(rs(role))
})

Cypress.Commands.add('textByRole', (role, text) => {
  return cy.contains(rs(role), text)
})
