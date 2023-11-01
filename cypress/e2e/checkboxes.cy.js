import homePage from '../pages/homePage'
import checkboxesPage from '../pages/checkboxesPage'

const home = new homePage
const checkboxes = new checkboxesPage

describe('Working with checkboxes', () => {

    it('Select the checkboxes in a page', () => {
        home.navigateToHomePage()
        home.navigateToCheckboxesPage().click()
        checkboxes.secondChekbox().uncheck()
        checkboxes.firstCheckbox().check()
        checkboxes.secondChekbox().check()
    })

})