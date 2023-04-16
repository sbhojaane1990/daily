// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('login', (email,password) => {
cy.visit('https://admin-demo.nopcommerce.com/login')
cy.get('[type="email"]').clear().type(email)
cy.get('[name="Password"]').clear().type(password)
cy.get('[type="submit"]').click()
})

Cypress.Commands.add('login2',(username,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[placeholder="Username"]').clear().type(username)
    cy.get('[name="password"]').clear().type(password)
    cy.get('[type="submit"]').click()
})