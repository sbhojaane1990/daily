 ///<reference types = "Cypress"/>

 describe('FileUploading ',()=>{
    //For Multiple file Uploading


    it.only('TC_ 01 fileuploading verification',()=>{
        cy.visit('https://automationexercise.com/contact_us')
        let youpath='fileupload.txt';
        let youpath1='Image.jpeg';
        let youpath2='Image2.jpeg'
        cy.get('[name="upload_file"]').attachFile([youpath,youpath1,youpath2])
        cy.get('[name="submit"]').click()
     //   cy.get('[name="upload_file"]').should('contain',youpath)
      
    })
    //For Single file Uploading
    it('Drag and drop methode verify',()=>{
        
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let y='fileupload.txt';
        cy.get('#file').attachFile(y)
        cy.get('div.box__success').should('contain.text','Done')
    })
 })