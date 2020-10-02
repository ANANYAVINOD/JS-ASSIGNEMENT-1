
let menuData = new XMLHttpRequest();
menuData.open("GET", "http://127.0.0.1:8000/menu.json");
menuData.send();
menuData.addEventListener("load", loadMenu);

function loadMenu(){
    menu = JSON.parse(menuData.response);
    const list = document.createElement('ul');
    for(let i=0;i<menu.length;i++){
        const listItem = document.createElement('li');
        const listItemAnchor = document.createElement('a');
        if(menu['notFound'] === true){
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
    updateTitle(menu);
}

function updateTitle(menuData) {
    const filePath = window.location.pathname.slice(1);
    menuData.forEach(element => {
        if (element['path'] === filePath) {
            const pageHeading = document.getElementById('page-heading');
            pageHeading.innerHTML = element['label'];
            const pageTitle = document.querySelector('title');
            pageTitle.innerHTML = element['label'];
        }
    });
}

