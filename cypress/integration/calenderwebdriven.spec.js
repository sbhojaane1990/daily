///<reference types="Cypress"/>
describe("Calender Verification",()=>{
    it("Verify functionalitywwwww",()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        let date= new Date()
        date.setDate(date.getDate()+300)
        let day = date.getDate()
        let month= date.getMonth()+1;;
        let MonthInText = date.toLocaleString('default',{month:"long"})
        let year= date.getFullYear()
        cy.log(year)
        cy.log(day)
        cy.log(month)
        cy.log(MonthInText)
        cy.get('#datepicker').click()
        function getYearMonth(){
            cy.get('.datepicker-switch').first().then((el)=>{
                if(!el.text().includes(year)){
                    cy.get('next').first().click().getYearMonth()                }
            })
        }
    })
})