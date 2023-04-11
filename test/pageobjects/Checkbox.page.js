import Page from './page.js';

class CheckboxPage extends Page {
    get checkbox1 () {
        return $('#checkboxes > input[type=checkbox]:nth-child(1)');
    }
    get checkbox2 () {    
        return $('//form/input[2]');
    }
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();