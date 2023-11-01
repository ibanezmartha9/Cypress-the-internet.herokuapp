class homePage {
    //Navigation

    navigateToHomePage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    //Locators

    navigatetoLoginPage(){
        return cy.get(':nth-child(21) > a')
    }

    navigateToCheckboxesPage(){
        return cy.get(':nth-child(6) > a')
    }

}

export default homePage