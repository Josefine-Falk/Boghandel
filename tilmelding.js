let btn = document.getElementById('send'); //henter det valgte ID
btn.addEventListener("click", function() {
    
    let hasErrors = false;
    
    let name = document.getElementById("txtName"); //henter det valgte ID
    if(!name.value) {name.style.borderColor = 'black';
    name.focus();
    hasErrors = true;
    return false;
    //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let adress = document.getElementById("txtAdress"); //henter det valgte ID
if(!adress.value) {adress.style.borderColor = 'black';
adress.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let city = document.getElementById("txtCity"); //henter det valgte ID
if(!city.value) {city.style.borderColor = 'black';
city.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let email = document.getElementById("txtEmail"); //henter det valgte ID
if(!email.value) {email.style.borderColor = 'black';
email.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let phone = document.getElementById("txtPhone"); //henter det valgte ID
if(!phone.value) {phone.style.borderColor = 'black';
phone.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}     
let message = document.getElementById("txtMessage"); //henter det valgte ID
if(!message.value) {message.style.borderColor = 'black';
message.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}                   
if(!hasErrors) {
document.getElementById("msgForm").submit();
//Lader formularen blive indsent hvis alle felter er udfyldt
}

});