import KeypressesPage from '../pageobjects/Keypresses.page.js'

describe('My Keypresses application', () => {
    xit('should display the pressed key', async () => {
        await KeypressesPage.open()

        await (browser).pause(500)
        await KeypressesPage.pressAkey('V')
        await (browser).pause(1000)
        await expect(KeypressesPage.Output).toHaveTextContaining(
            'V'
        )
    })
})