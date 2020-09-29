let menuData = new XMLHttpRequest();
menuData.open("GET", "127.0.0.1:5500/apis/menu.json");
menuData.send();
menuData.addEventListener("load", loadMenu);

function loadMenu(){
    menu = JSON.parse(menuData.response);
    const list = document.createElement('ul');
    for(let i=0;i<menu.length;i++){
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');
        if(menu['not_found']===true){
            listItemAnchor.href = 'pageNotFound.html';
        }
        else{
            listItemAnchor.href = menu[i]['path'];
        }
        listItemAnchor.innerHTML = menu[i]['label']; 
        listItem.appendChild(listItemAnchor);
        list.appendChild(listItem);
    }
    const nav = document.getElementById('nav');
    nav.appendChild(list);
}