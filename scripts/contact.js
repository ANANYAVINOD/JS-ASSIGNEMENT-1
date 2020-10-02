
function validateSend() {
    const name1 = nameValidate();
    const num1 =  numValidate();
    const email1 = emailValidate();
    let reqObj;
    console.log(name1, num1, email1);
    if (name1 && num1 && email1) {
        reqObj = {name1, num1, email1};
        console.log(reqObj);
        reqObj = JSON.stringify(reqObj);
        console.log(reqObj);
        const xhrObj = new XMLHttpRequest();
        xhrObj.open("POST", "nowhere.com");
        xhrObj.send(reqObj);
    }
}
function nameValidate() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');
    if(name == "") {
        nameError.innerHTML = "*Please fill the name field";
        return false;
    }
    else if((name.length <= 8) || (name.length > 25)) {
        nameError.innerHTML = "*Length must be between 8 and 25 characters";
        return false;
    }
    else {
        nameError.innerHTML = "";
    }    
    return name;  
}

function numValidate() {
    const num = document.getElementById('num').value;
    const numError = document.getElementById('num-error');
    if(num == "") {
        numError.innerHTML = "*Please fill the Phone number";
        return false;
    }
    else 
      numError.innerHTML = "";
    return num;  
}

function emailValidate() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    if(email == "") {
        emailError.innerHTML = "*Please fill the email id";
        return false;
    }
    else 
        emailError.innerHTML = "";
    return email;    
}

function count() {
    var counter = document.getElementById("message").value;
    document.getElementById("charCount").innerHTML = 255 - counter.length;
}