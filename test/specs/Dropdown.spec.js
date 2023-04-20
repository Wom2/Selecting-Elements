import DropdownPage from '../pageobjects/Dropdown.page.js'

describe('My Dropdown application', () => {
    it('should select both options', async () => {
        await DropdownPage.open()

        await (browser).pause(2000)
        await (DropdownPage).Dropdown.click()
        await (DropdownPage).option1.click()
        await (browser).pause(2000)
        await expect(DropdownPage.Dropdown).toHaveTextContaining(
            'Option 1')

        await (DropdownPage).Dropdown.click()
        await (DropdownPage).option2.click()
        await (browser).pause(2000)
        await expect(DropdownPage.Dropdown).toHaveTextContaining(
            'Option 2')
    })
})