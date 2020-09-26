function getPageUrl(menuObj) {
    const notFoundPage = 'pageNotFound.html';
    let menuHref = '#';
    if (menuObj.not_found) {
        menuHref = notFoundPage; // declared in windowScope
    } else if (menuObj.href) {
        menuHref = menuObj.href;
    }
    return menuHref;

}
function setCurrentClickedMenu(menuObj) {
    if (location.pathname.indexOf(menuObj.href) !== -1) {
        document.querySelector('h2').innerHTML = menuObj.title;
    }
}
function loadMenu() {
    getJson('.apis/menu.json', function(response) {
        if (response) {
            const menus = response.data;
            if (menus && menus.length) {
                const parent = document.querySelector('#menuContainer'),
                menuLength = menus.length,
                navEl = parent.appendChild(document.createElement('nav')),
                ulEl = navEl.appendChild(document.createElement('ul'));  
                for(let idx = 0; idx < menuLength; idx++) {
                    const aElement = document.createElement('a');
                    aElement.setAttribute('href', getPageUrl(menus[idx])); // set href
                    aElement.innerHTML = menus[idx].title; // place text
                    setCurrentClickedMenu(menus[idx]);
                    ulEl.appendChild(document.createElement('li').appendChild(aElement));
                }
            }
        }
    });
}
function getJson(url, callbackFunction) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        if (xhr.status !== 200) {
            alert('Oops! Something went wrong.');
            callbackFunction(false);
        } else {
            callbackFunction(JSON.parse(xhr.response));
        }
    });

    xhr.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
    });

    xhr.open('GET', url, true);
    xhr.send();
}
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }