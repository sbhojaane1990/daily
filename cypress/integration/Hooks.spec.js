describe('Tutorialspoint', function() {
    before(function() {
       // executes once prior all tests in it block
       cy.log("Before hook")
    })
    after(function() {
       // executes once post all tests in it block
       cy.log("After hook")
    })
    beforeEach(function() {
       // executes prior each test within it block
       cy.log("BeforeEach hook")
    })
    afterEach(function() {
       // executes post each test within it block
       cy.log("AfterEac hook")
    })
    it('First Test', function() {
       cy.log("First Test")
    })
    it('Second Test', function() {
       
    })
 })
