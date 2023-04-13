import Add_removePage from '../pageobjects/Add_remove.page.js'

describe('Add_remove Application', () => {
    it('should add 5 and remove 2 elements', async () => {
        await Add_removePage.open()

        await (browser).pause(2000)
        await (Add_removePage).addelement.click()
        await (browser).pause(500)
        await (Add_removePage).addelement.click()
        await (browser).pause(500)
        await (Add_removePage).addelement.click()
        await (browser).pause(500)
        await (Add_removePage).addelement.click()
        await (browser).pause(500)
        await (Add_removePage).addelement.click()
        await (browser).pause(500)
        
        await (Add_removePage).removeelement.click()
        await (browser).pause(500)
        await (Add_removePage).removeelement.click()
        await (browser).pause(1500)
        await expect(Add_removePage.children).toHaveChildren(3)
    })
})