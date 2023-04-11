import Add_removePage from '../pageobjects/Add_remove.page.js'

describe('Add_remove Application', () => {
    it('should add and remove elements', async () => {
        await Add_removePage.open()
    })
})