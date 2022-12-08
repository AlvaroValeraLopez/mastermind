/* DECLARACIÓN DE VARIABLES GLOBALES. */
var form;
var nickField;
var sizeSelect;
var emailField;
var errorMsg;
var avatarIcons;
var choosenAvatar;
var imgItem;


/* CREACIÓN DE LAS FUNCIONES. */
function validateNick(){
    if(nickField.value.length == 0){
        sessionStorage.setItem('error', "El campo Nick no puede estar vacio.");
        return false;
    }
    return true;
}
function validateSize(){
    if(sizeSelect.value == "0"){
        sessionStorage.setItem('error', "Debes indicar el tamaño del mapa.");
        return false;
    }
    return true;
}
function validateEmail(){
    if(emailField.value.length == 0){
        sessionStorage.setItem('error', "El campo correo no puede estar vacio.");
        return false;
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailField.value)){
        sessionStorage.setItem('error', "El correo introducido no es válido.");
        return false;
    }
    return  true;
}

function printErrorMsg(field = null, event = null){
    
    let error = sessionStorage.getItem('error');

    if(field != null) field.focus();
    if(event != null) event.preventDefault();
    if(error != null){
        errorMsg.innerText = error;
        sessionStorage.removeItem('error');
        document.getElementById("errorPanel").style.display = "flex";
        return false;
    }

    return true;
}
function validateForm(event){

    if(!validateNick()) return printErrorMsg(nickField, event);
    else if(!validateEmail()) return printErrorMsg(emailField, event);
    else if(!validateSize()) return printErrorMsg(sizeSelect, event);
        
    userData(nickField);
    createHistorical(nickField.value)
    return true;
}
function getElements(){
    form = document.getElementById('form');
    nickField = document.getElementById('nick');
    sizeSelect = document.getElementById('size');
    emailField = document.getElementById('email');
    errorMsg = document.getElementById('errorMsg');
}
function loadedDOM(){
    getElements();
    printErrorMsg();
    // addEventListenerToAvatars();
    form.addEventListener('submit', validateForm);
}
/*
function imgMovement(event){
    imgItem = event.target;
    console.log(imgItem.src);
}
function chooseAvatar(event){
    choosenAvatar.src = imgItem.src;
}
function addEventListenerToAvatars(){
    avatarIcons = Array.from(document.getElementsByClassName('avatarIcon'));
    choosenAvatar = document.getElementById('choosenAvatar');

    avatarIcons.forEach(avatar => {
        avatar.addEventListener('dragstart', imgMovement);
    });
    choosenAvatar.addEventListener('dragover', event => {
        event.preventDefault()
    });
    choosenAvatar.addEventListener('drop', chooseAvatar);
}
*/
document.addEventListener('DOMContentLoaded', loadedDOM);