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

    navigateToContextMenu(){
        return cy.get(':nth-child(7) > a')
    }    
    
    NavigateToAddAndRemoveElements(){
        return cy.get('ul > :nth-child(2) > a')
    }
}

export default homePage