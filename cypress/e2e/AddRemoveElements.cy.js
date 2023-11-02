import homePage from "../pages/homePage";
import addRemoveElements from "../pages/addRemoveElements";

const home = new homePage;
const addRemove = new addRemoveElements;

describe ('Testing the add and remove functionality', function() {

    it('Add and remove elements from the page', () => {
        home.navigateToHomePage()
        home.NavigateToAddAndRemoveElements().click()
        addRemove.verifyAddRemoveElementsTitle().should('be.visible')
        addRemove.deletebutton().should('not.to.exist')
    })

})