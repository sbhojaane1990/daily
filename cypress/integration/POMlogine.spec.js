import Login from "../PageObject/POMlogine.js";
describe("How to use Pom",()=>{
    it("Verify the functionality of Logine page Using POM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln =new Login();    //(ln= Object reference variable)
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
    })
})  