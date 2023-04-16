
describe("Verifying Different Types of Alerts",function(){
    before("Using Before Hook",function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it("Javascript Alert",function(){
      
        cy.contains("Click for JS Alert").click()
        cy.wait(4000)
        cy.on('windowa:alert',function(t){
            expect(t).to.contains("I am a JS Alert");
        })
    })
    it("Javascript alert Confirm",function(){
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',function(t){
            expect(t).to.contain('I am a JS Confirm')
        })
    })
    it.only("Javascript alert Confirm",function(){
        //cy.get('button[onclick="jsPrompt()"]').click()
        cy.window().then(function(win){
            cy.stub(win,"prompt").returns('welcome')
            cy.contains('Click for JS Prompt').click()

        })
        cy.get('#result').should('have.text','You entered: welcome')
    })
    it("Javascript alert Confirm",function(){
        //cy.get('button[onclick="jsPrompt()"]').click()
        cy.window().then(function(win){
            cy.stub(win,"prompt").returns('Null')
            cy.contains('Click for JS Prompt').click()

        })
        cy.get('#result').should('have.text','You entered: Null')
    })

})