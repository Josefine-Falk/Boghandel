let btn = document.getElementById('loan'); //henter det valgte ID
btn.addEventListener("click", function() {
    
    let hasErrors = false;
 
    
    let book = document.getElementById("txtBook"); //henter det valgte ID
    if(!book.value) {book.style.borderColor = 'red';
    book.focus();
    hasErrors = true;
    return false;
    //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
    }   
    let writer = document.getElementById("txtWriter"); //henter det valgte ID
    if(!writer.value) {writer.style.borderColor = 'red';
    writer.focus();
    hasErrors = true;
    return false;
    //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
    }
    let name = document.getElementById("txtName"); //henter det valgte ID
    if(!name.value) {name.style.borderColor = 'red';
    name.focus();
    hasErrors = true;
    return false;
    //gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let email = document.getElementById("txtEmail"); //henter det valgte ID
if(!email.value) {email.style.borderColor = 'red';
email.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}
let adress = document.getElementById("txtAdress"); //henter det valgte ID
if(!adress.value) {
    adress.style.borderColor = 'red';
adress.focus();
hasErrors = true;
return false;
//gør feltets kant rød hvis det er tomt, når der trykkes på 'send'
}                     
if(!hasErrors) {
document.getElementById("msgForm").submit();
//Lader formularen blive indsent hvis alle felter er udfyldt
}

});