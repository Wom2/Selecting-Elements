import ChallengePage from '../pageobjects/Challenging_dom.page.js'

describe('Challenge Application', () => {
    it('should select three elements', async () => {
        await ChallengePage.open()

        await (browser).pause(1000)
        
        await expect(ChallengePage.Poweredby).toExist()
        await expect(ChallengePage.Poweredby).toHaveTextContaining(
            'Elemental Selenium')
        await expect(ChallengePage.partialPoweredby).toExist()
        await expect(ChallengePage.partialPoweredby).toHaveTextContaining(
            'Elemental Selenium')
        await expect(ChallengePage.Apeirian).toExist()
        await expect(ChallengePage.Apeirian).toHaveTextContaining(
            'Apeirian0')
        
        await (browser).pause(1000)
    })
})