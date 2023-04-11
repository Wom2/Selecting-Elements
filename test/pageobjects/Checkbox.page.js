import Page from './page.js';

class CheckboxPage extends Page {
    get checkbox1 () {
        return $('*[@id="checkboxes"]/input[1]');
    }
    get checkbox2 () {    
        return $('//form/input[2]');
    }
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();