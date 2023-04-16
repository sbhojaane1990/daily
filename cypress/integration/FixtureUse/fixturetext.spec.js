
// describe('Use of fixture folder',()=>{
//     let obj
//     before('For Entering Data from fixture folder',()=>{
//         cy.fixture('data.json').then('',(data)=>{
//             obj=data
//         })
//     })

//     it('Example of fixture',()=>{
//         cy.visit('https://www.kesari.in/login')
//         cy.get('[type="email"]').first().click().type(obj.email)
//         cy.get('[name="password"]').click().type(obj.password)
//         cy.get('button[type="submit"]').click()
//         cy.title().should('include','World Class')
//     })
// })

///<reference types = "Cypress"/>

describe('Functionality of fixtur',()=>{
    let obj
    before(() => {
        cy.fixture('names').then((ele) => {
            obj = ele
        })
    })
    it('Verify the functionality of fixure',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(obj.name)
        cy.get('[name="last_name"]').type(obj.lname)
        cy.get('[name="email"]').type(obj.gmail)
        cy.get('[name="message"]').type(obj.Msg)
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!')
    
    })
})