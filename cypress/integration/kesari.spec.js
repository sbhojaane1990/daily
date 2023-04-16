///<reference types ="Cypress"/>
describe('Kesari website Automation', () => {
    it("How to Logine in Kesari website", () => {
        cy.visit("https://www.kesari.in/")
     //   cy.get('#content').scrollIntoView();
       cy.wait(4000)
       cy.get(`.quick-menu > [ng-class="{active: isActive('/login')}"] > a`).click()
     //  cy.get('[href="/About-Us"]').eq(0).click()
    //     cy.get('[href="/login"]').eq(1).click()
    //    cy.contains('Sign up for Kesari').click()
    //     cy.get('[placeholder="Enter First Name"]').click().type('Shriram')
    //     cy.get('[name="lastName"]').click().type('Mali')
    //     cy.get('[name="email"]').click().type('sb9860389346@gmail.com')
    //     cy.get('[name="password"]').click().type('Sb1234@')
    //     cy.get('#password_c').click().type('Sb1234@')
    //     cy.get('[name="gender"]').select()
    })
})

//     it.skip("scroll page at specific element", () => {
//         cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
//         cy.contains('Beginner Tutorial').click()
//         //cy.get(".cont a").scrollIntoView();
//     });
// });
// describe("Radio Buttons", () => {
//     it("1. Assert default Radio button condition", () => {
//               cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
//               cy.get(".display form > input").first().should("be.checked");
//               // cy.get(".display form > input").first().should("have.attr", "checked", "yes");
//               cy.get(".display form > input").first().should("have.attr", "checked", "checked");

//               // For unchecked button
//               cy.get(".display form > input").eq(1).should("not.be.checked");
//               cy.get(".display form > input").eq(1).should("not.have.attr", "checked", "checked");
//     });
// })

