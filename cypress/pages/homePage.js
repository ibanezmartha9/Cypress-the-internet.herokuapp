class homePage {
    //Navigation

    navigateToHomePage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    //Locators

    navigatetoLoginPage(){
        return cy.get(':nth-child(21) > a')
    }

}

export default homePage