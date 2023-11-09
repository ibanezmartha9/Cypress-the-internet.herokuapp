import homePage from '../pages/homePage'
import contextMenu from '../pages/contextMenu'

const home = new homePage
const context = new contextMenu

describe('Testing the context menu', function(){

    it('Testing right click and the message in an alerts', () => {
        home.navigateToHomePage()
        home.navigateToContextMenu().click().should('have.text', 'Context Menu')
        context.frameBox().rightclick()
        cy.on('window:alert', function(alert){
            expect(alert).to.equal('You selected a context menu')
        })
    })
})
