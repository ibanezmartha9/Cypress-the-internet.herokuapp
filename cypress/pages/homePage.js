class homePage {
    //Navigation

    navigateToHomePage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    //Locators

    navigatetoLoginPage(){
        return cy.get(':nth-child(21) > a')
    }

    //Actions
    closeWindow(){
        window.close()
    }

}

export default homePage