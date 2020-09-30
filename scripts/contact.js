function validation() {
    var name = document.getElementById('name').value;
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
    if(num == "") {
        document.getElementById('phone-error').innerHTML = "*Please fill the Phone number";
        return false;
    }
    if(mailid == "") {
        document.getElementById('email-error').innerHTML = "*Please fill the email id";
        return false;
    }
}
function loadSubmit() {
    let reqObj;
    if(validation()) {
        reqObj = validation;
        console.log(reqObj);
        reqObj = JSON.stringify(reqObj);
        console.log(reqObj);
        const xhrObj = new XMLHttpRequest();
        xhrObj.open("POST", "abc.com");
        xhrObj.send(reqObj);
    }  
}

function count() {
    var counter = document.getElementById("description").value;
    document.getElementById("charCount").innerHTML = 255 - counter.length;
}

