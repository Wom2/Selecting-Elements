import CheckboxPage from '../pageobjects/Checkbox.page.js'

describe('My Checkbox application', () => {
    it('should click both boxes', async () => {
        await CheckboxPage.open()
        await (CheckboxPage).checkbox1.click()
        await (browser).pause(4000)
        await (CheckboxPage).checkbox1.isSelected()
        //I am currently trying to get true and false to function
        //for isSelected.maybe change to expect to be selected
        await (CheckboxPage).checkbox2.click()
        await (browser).pause(4000)
        await (CheckboxPage).checkbox2.isSelected()
    })
})