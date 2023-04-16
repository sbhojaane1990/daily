
describe("EnvirTwo types of Approaches",()=>{
    it("Type 1 Cypress BaseUrl Approach",()=>{
        cy.log(Cypress.config().baseUrl) //accesing baseUrl
        let url=Cypress.config().baseUrl;
        cy.visit(url);//passing url value to cy.visit()
    })
    // First foloow above Then go to
    //Then go to cypress.json file and type  { "baseUrl":"https://www.facebook.com"    } and save it and run npx cypress open
 
    // it.only('Staging Envirenment', () => {
    //     let url = Cypress.config().baseUrl;
    //     cy.visit(url);
    // })
})




//OR Change Base Url Through Command Line
//npx cypress run --headed --config baseUrl="https://www.facebook.com

// Change Base Url By using Creating New file Name"staging-config.json" In the Cypress Folder and Extend the BaseUrl 
//{
   // "extends": "./cypress.json",
    //"baseUrl": "https://www.google.com"
 // } 

 //Run By 
 //npx cypress run --headed --config-file staging-config.json


 // Change Base Url By using Creating New fileName "production-config.json" In the Cypress Folder and Extend the BaseUrl
//{
   // "extends": "./cypress.json",
    //"baseUrl": "https://www.youtube.com"
 // } 
 //Run By 
 //npx cypress run --headed --config-file production-config.json
