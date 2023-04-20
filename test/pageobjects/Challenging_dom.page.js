import Page from './page.js';

class ChallengePage extends Page {
    get Poweredby () {
        return $('=Elemental Selenium');
    }
    get partialPoweredby () {
        return $('*=Elemental');
    }
    get Apeirian () {
        return $('//tbody/tr[1]/td[2]');
    }
    open () {
        return super.open('challenging_dom');
    }
}

export default new ChallengePage();