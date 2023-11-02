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

    loginMessage(){
        return cy.get('#flash')
    }
}

export default loginPage