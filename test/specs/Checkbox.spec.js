import CheckboxPage from '../pageobjects/Checkbox.page.js'

describe('My Checkbox application', () => {
    it('should click both boxes', async () => {
        await CheckboxPage.open()
    })
})