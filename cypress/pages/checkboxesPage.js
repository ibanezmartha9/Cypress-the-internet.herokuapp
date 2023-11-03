class checkboxesPage {

    //Locators

    firstCheckbox(){
        return cy.get('#checkboxes > :nth-child(1)')
    }

    secondChekbox(){
        return cy.get('#checkboxes > :nth-child(3)')
    }

}

export default checkboxesPage