///<reference types="Cypress"/>

// Normal Code
describe('Changing the Envirement or create Global Variable', () => {
    // it("Changing the base Url", () => {
    //     cy.visit('https://admin-demo.nopcommerce.com/login')
    //     cy.url().should('include', 'nopcommerce')
    // })


    /*  After changing Base url Goto cypress.json file open and type
    {
        "env":   //Key
        {
            "url":"https://admin-demo.nopcommerce.com/login"      //value
        }
    }
    */

    it("Changing the base Url", () => {
        cy.visit(Cypress.env('url'))
       // cy.visit(Cypress.env('url')+"/login")
      //  cy.url().should('include', 'nopcommerce')
    })

})
