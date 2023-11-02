class homePage {
    //Navigation

    navigateToHomePage(){
        cy.visit('https://the-internet.herokuapp.com/')
    }

    //Locators

    navigatetoLoginPage(){
        return cy.get(':nth-child(21) > a')
    }

    NavigateToAddAndRemoveElements(){
        return cy.get('ul > :nth-child(2) > a')
    }

    //Actions
    closeWindow(){
        window.close()
    }

}

export default homePage