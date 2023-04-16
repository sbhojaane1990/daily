///<reference types="Cypress"/>
/*

describe('Create custome command',()=>{
    it('Logine ',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[type="email"]').clear().type('admin@yourstore.com')
        cy.get('[name="Password"]').clear().type('admin')
        cy.get('[type="submit"]').click()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

    it('Adding Customer ',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[type="email"]').clear().type('admin@yourstore.com')
        cy.get('[name="Password"]').clear().type('admin')
        cy.get('[type="submit"]').click()
        cy.log('Adding Customer........')
    })
    it('Edit Customer ',()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[type="email"]').clear().type('admin@yourstore.com')
        cy.get('[name="Password"]').clear().type('admin')
        cy.get('[type="submit"]').click()
        cy.log('Edit Customer........')
    })
    
})

*/

//  Before Use of Custome cmd
//  open support>commandline.js>open
//  Add it Syntax        Cypress.Commands.add('login', (email, password) => {....})
/*

Cypress.Commands.add('login', (email,password) => {
cy.visit('https://admin-demo.nopcommerce.com/login')
cy.get('[type="email"]').clear().type(email)
cy.get('[name="Password"]').clear().type(password)
cy.get('[type="submit"]').click()
})

*/

describe('Create custome command',()=>{
    it('Logine ',()=>{
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
    it('Adding ',()=>{
        cy.login('admin@yourstore.com','admin')
        cy.log("Addding customer")
    })
    it('Editing ',()=>{
        cy.login('admin@yourstore.com','admin')
        cy.log("Editing customer")
    })
    it.only("HRM Logine",()=>{
        cy.login2('Admin','admin123')
    })
})
