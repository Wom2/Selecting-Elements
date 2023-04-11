import Page from './page.js';

class DropdownPage extends Page {
    get () {

    }
    open () {
        return super.open('dropdown');
    }
}

export default new DropdownPage();