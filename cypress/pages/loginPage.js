class loginPage {

    //Locators 

    userNameField(){
        return cy.get('#username')
    }

    passwordField(){
        return cy.get('#password')
    }

    loginButton(){
       return cy.get('.fa')
    }

    invalidUserErrorMessage(){
        return cy.contains('Your username is invalid')
    }

    invalidPasswordErrorMessage(){
        return cy.contains('Your password is invalid')
    }

    validUserAndPassword(){
        return cy.contains('You logged into a secure area')
    }
}

export default loginPage