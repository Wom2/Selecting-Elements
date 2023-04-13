import Page from './page.js';

class KeypressesPage extends Page {
    get Input () {
        return $('#target');
    }
    get Output () {
        return $('#result');
    }
    async pressAkey (input) {
        await this.Input.setValue(input);
    }
    open () {
        return super.open('key_presses');
    }
}

export default new KeypressesPage();