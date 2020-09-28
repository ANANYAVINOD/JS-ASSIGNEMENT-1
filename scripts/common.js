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
    getJson('http://127.0.0.1:8000/menu.json', function(response) {
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
function loadDynamicBlogPosts() {
    getJson('http://192.168.43.124:8000/blogs.json', function(response) {
        if (response) {
            const blogPosts = response.posts;
            if ( blogPosts && blogPosts.length) {
                const parent = document.querySelector('#blogPostsSection'),
                blogLength = blogPosts.length,
                ulElm = parent.appendChild(document.createElement('ul'));

                for (let i=0; i<blogLength; i++) {
                    const aElement = document.createElement('a');
                    ulElm.setAttribute('id', 'blogPosts');
                    const postAnchor = createAEl(null, blogPosts[i].blogUrl);
                    const postImg = postAnchor.appendChild(document.createElement('img'));
                    postImg.setAttribute('src', blogPosts[i].image);
                    ulElm.appendChild(document.createElement('li').appendChild(postAnchor));
                }
                document.getElementById('blogPostsSection').appendChild(ulElm);
            }
        }
    });
}    
    
function getJson(url, callbackFunction)    {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function (event) {
                if (xhr.status !== 200) {
                    alert('Oops! Something went wrong.');
                    callbackFunction(false);
                } else {
                    callbackFunction(JSON.parse(xhr.response));
                }
            });

            xhr.addEventListener('error', function (event) {
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
function validation() {
    var name = document.getElementById('name').value;
    var sub = document.getElementById('subject').value;
    var num = document.getElementById('phone').value;
    var mailid = document.getElementById('mail').value;

    if(name == "") {
        document.getElementById('name-error').innerHTML = "*Please fill the name field";
        return false;
    }
    if((name.length <= 8) || (name.length > 25)) {
        document.getElementById('name-error').innerHTML = "*Length must be between 8 and 25 characters";
        return false;
    }
    if((subject.length<=25)) {
        document.getElementById('subject-error').innerHTML = "*Upto 25 characters";
    }
    if(num == "") {
        document.getElementById('phone-error').innerHTML = "*Please fill the Phone number";
        return false;
    }
    if(mailid == "") {
        document.getElementById('email-error').innerHTML = "*Please fill the email id";
        return false;
    }
    function loadSubmit() {
        alert("The form was submitted");
    }
}    
function generateDynamicTable() {
    getJson('http://192.168.43.124:8000/table-header.json', function(response) {
        if (response) {
            const head = response.headings;
            if (head && head.length) {
                const parent = document.querySelector('#tableHead'),
                noOfheaders = headings.length;
                if(noOfheaders>0) {
                  var col = []; 
		          for (var i = 0; i < noOfheaders; i++) {
			        for (var key in headings[i]) {
				      if (col.indexOf(key) === -1) {
                        col.push(key);
                       }
                    }
                  }
                }
            var tHead = document.createElement("thead"); 
            var hRow = document.createElement("tr");
	        for (var i = 0; i < col.length; i++) {
              var th = document.createElement("th");
              th.innerHTML = col[i];
              hRow.appendChild(th);
            }
            tHead.appendChild(hRow);
            table.appendChild(tHead);	
            var divContainer = document.getElementById("headings");
	        divContainer.innerHTML = "";
	        divContainer.appendChild(table);
            }
        } 
    });
}	