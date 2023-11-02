import homePage from '../pages/homePage'
import checkboxesPage from '../pages/checkboxesPage'

const home = new homePage
const checkboxes = new checkboxesPage

describe('Working with checkboxes', () => {

    it('Select the checkboxes in a page', () => {
        home.navigateToHomePage()
        home.navigateToCheckboxesPage().click()
        checkboxes.secondChekbox().uncheck().should('not.to.be.checked')
        checkboxes.firstCheckbox().check().should('be.checked')
        checkboxes.secondChekbox().check().should('be.checked')
    })

})