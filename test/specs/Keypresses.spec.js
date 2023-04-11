import KeypressesPage from '../pageobjects/Keypresses.page.js'

describe('My Keypresses application', () => {
    it('should display the pressed key', async () => {
        await KeypressesPage.open()
    })
})