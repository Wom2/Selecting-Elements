import Page from './page.js';

class KeypressesPage extends Page {
    get () {

    }
    open () {
        return super.open('key_presses');
    }
}

export default new KeypressesPage();