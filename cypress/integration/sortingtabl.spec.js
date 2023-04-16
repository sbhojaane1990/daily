describe("Sorting Table",()=>{
   
    it("sorts",()=>{
  //cy.get('.auth-header').should('include','Login Form')
    cy.visit("https://sakshingp.github.io/assignment/login.html")
    cy.intercept('https://sakshingp.github.io/assignment/home.html').as('Waituntil')

   cy.get('#username').type('Naziya')
  cy.get('#password').type('Naaz@234')
  cy.get('#log-in').click()
  cy.url().should('include','home.html')
  cy.get('#transactionsTable tbody tr ').should('have.length',6)
  cy.get('#amount').click()
  cy.get('#transactionsTable tbody td + td +td +td +td').then(($prices)=>{
    const sortcell= Cypress._.map($prices)
    const sortel=Cypress._.sortBy($prices)
    cy.log(sortcell)
    cy.log(sortel)
    cy.wait('@Waituntil')
    expect(sortcell,'cells are sorted').to.deep.equal(sortel)
 })

    })
})