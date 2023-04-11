import DropdownPage from '../pageobjects/Dropdown.page.js'

describe('My Dropdown application', () => {
    it('should select the correct option', async () => {
        await DropdownPage.open()
    })
})//says dropdown not defined