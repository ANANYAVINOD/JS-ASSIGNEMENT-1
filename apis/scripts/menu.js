import { utils } from './utility.js';
class MenuSection {
    loadDynamicMenuSection() {
        utils.get('./apis/menu.json', function(response) {
            const menu = response.lists;
            if (lists.length) {
                let ulElm = document.createElement('ul')
                ulElm.setAttribute('id', 'name')
            }    
        }
    }  