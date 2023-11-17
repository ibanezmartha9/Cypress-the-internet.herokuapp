class contextMenu{

    //Locators

    contextMenuTitle(){
        return cy.contains('Context Menu')
    }

    frameBox(){
        return cy.get('#hot-spot')
    }

}

export default contextMenu;