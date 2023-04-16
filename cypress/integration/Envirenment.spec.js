//my.spec.ts
//Accessing baseUrl value from cypress.json
describe('Example of BaseUrl', () => {
    it('Example of Baseurl', () => {
        cy.log(cypress.config())
        // let url = Cypress.config().baseUrl; //accesing baseUrl
        // cy.visit(url); //passing url value to cy.visit()
    });
});