import Page from './page.js';

class Add_removePage extends Page {
    get addelement () {
        return $('button');
    }
    get removeelement () {
        return $('//*[@id="elements"]/button[1]');
    }
    // get removeelement () {
    //     return $('button(2)');
    // }test if I can get this to work
    get children () {
        return $('#elements');
    }
    open () {
        return super.open('add_remove_elements/');
    }
}

export default new Add_removePage();