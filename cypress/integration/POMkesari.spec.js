import Login from "../PageObject/kesari.js";
describe('Kesari Website',()=>{
    it('Functionality of kesari website',()=>{
        cy.visit('https://www.kesari.in/')
        cy.wait(2000)
        const ln=new Login();
        ln.click();
        ln.setUserName("vishnu")
        ln.setLastName("Mali")
        ln.setEmail('sb9860389346@gmail.com')
        ln.setPassword('Sb9272575737@')
        cy.wait(2000)
        ln.setCPassword('Sb9272575737@')
        ln.click()
    

    })
})