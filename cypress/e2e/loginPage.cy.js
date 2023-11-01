import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage' 

const home = new homePage
const login = new loginPage
const data = require('../fixtures/login.json')

describe('Testing login of the-internet.herokuapp', () => {

    beforeEach(() => {
        home.navigateToHomePage()
        home.navigatetoLoginPage().click()
    })

    data.forEach((data) => { 
        it('Validate when the user is '+data.user+' the message is '+data.message+'', function () {       
            login.userNameField().type(data.user)  
            login.passwordField().type(data.password)   
            login.loginButton().click()
            login.loginMessage().should('include.text', data.message)
        })
    })
   
}) 
