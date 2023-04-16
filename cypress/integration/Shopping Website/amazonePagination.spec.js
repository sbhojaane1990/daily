///<reference types="cypress"/>
describe('pagignation',()=>{
    let index1=2
    it('pagignation',()=>{
        cy.visit('https://www.amazon.in/s?k=test&crid=325BILYMZG3RN&sprefix=tes%2Caps%2C309&ref=nb_sb_noss_2')
        indexval()
        function indexval(){
            cy.wait(4000)
            cy.get('body').then((bdy)=>{
                if(bdy.find(`[aria-label="Go to page ${index1}"]`).length>0){
                    cy.get(`[aria-label="Go to page ${index1}"]`).should('be.visible').click({force:true})
                    index1=index1+1
                    indexval()
                    
                }
            })
            
        }
        
    })
})