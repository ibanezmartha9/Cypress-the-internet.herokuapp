class addRemoveElements{

    //Locators 

    addRemoveElementsTitle(){
        return cy.get('h3')
    }

    addElementButton(){
        return cy.contains('Add Element')
    }

    deletebutton(){
        return cy.contains('Delete')
    }
}

export default addRemoveElements 