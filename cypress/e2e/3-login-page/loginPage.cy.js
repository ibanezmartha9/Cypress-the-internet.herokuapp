import homePage from '../../pages/homePage'
import loginPage from '../../pages/loginPage' 

const home = new homePage
const login = new loginPage

describe('Testing login of the-internet.herokuapp', () => {

    beforeEach(() => {
        home.navigateToHomePage()
        cy.fixture('login.json').then(function(loginData){
            this.loginData = loginData
        })
    })

    it('Username is invalid', function () {
        home.navigatetoLoginPage().click()
        login.userNameField().type(this.loginData.invalidUser)  
        login.passwordField().type(this.loginData.validpassword)   
        login.loginButton().click()
        login.invalidUserErrorMessage().should('exist')
    })

    
    it('Password is invalid', function () {
        home.navigatetoLoginPage().click()
        login.userNameField().type(this.loginData.validUser)  
        login.passwordField().type(this.loginData.invalidPassword)   
        login.loginButton().click()
        login.invalidPasswordErrorMessage().should('exist')
    })

    it('User and password are valid', function () {
        home.navigatetoLoginPage().click()
        login.userNameField().type(this.loginData.validUser)  
        login.passwordField().type(this.loginData.validpassword)   
        login.loginButton().click()
        login.validUserAndPassword().should('exist')
    })
}) 
