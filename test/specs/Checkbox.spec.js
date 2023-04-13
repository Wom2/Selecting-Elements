import CheckboxPage from '../pageobjects/Checkbox.page.js'

describe('My Checkbox application', () => {
    it('should click both boxes', async () => {
        await CheckboxPage.open()
        
        await (CheckboxPage).checkbox1.click()
        await (browser).pause(2000)
        await expect(CheckboxPage.checkbox1).toBeSelected()
        
        await expect(CheckboxPage.checkbox2).toBeSelected()
        await (CheckboxPage).checkbox2.click()
        await (browser).pause(2000)
    })
})