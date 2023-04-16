
class Login{
    click(){
        cy.get(`.quick-menu > [ng-class="{active: isActive('/signup')}"] > a`).click()
    //   cy.contains('Login').eq(1).click()
        //  cy.get("ul[class='quick-menu pull-right list-unstyled mb-0'] li[class='active'] a").click()
    }
    setUserName(username){
        cy.get('.form-group > .input-group.input-group--style-1 > input[placeholder="Enter First Name"]').type(username)
    }
    setLastName(lastname){
        cy.get('input[name="lastName"]').type(lastname)
    }
    setEmail(email){
        cy.get('input[placeholder="Enter Your Email"]').type(email)
    }
    setPassword(password){
        cy.get('input[type="password"]').eq(0).type(password)
    }
    setCPassword(cpassword){
        cy.get('input[type="password"]').eq(1).type(cpassword)
    }
    click(){
        cy.get('select[placeholder="Please select Gender"]').click()
    }
   
}

export default Login