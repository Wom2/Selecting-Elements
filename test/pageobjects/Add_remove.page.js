import Page from './page.js';

class Add_removePage extends Page {
    get  () {

    }
    open () {
        return super.open('add_remove_elements');
    }
}

export default new Add_removePage();