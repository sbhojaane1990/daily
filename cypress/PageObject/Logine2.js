class Login
{
    txtUserName="input[name='username']";
    txtPassword="input[type='password']";
    btnSubmit="[type='submit']"
    setUserName(username)
    {
        cy.get('input[name="username"]').type(username)
    }
    setPassword(password)
    {
        cy.get('input[type="password"]').type(password)
    }
    clickSubmit()
    {
        cy.get('[type="submit"]').click()
    }
}

export default Login