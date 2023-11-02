class addRemoveElements{

    //Locators 

    verifyAddRemoveElementsTitle(){
        return cy.contains('Add/Remove Elements')
    }

    addElementButton(){
        return cy.contains('Add/Remove Elements')
    }

    deletebutton(){
        return cy.contains('Delete')
    }
}

export default addRemoveElements 