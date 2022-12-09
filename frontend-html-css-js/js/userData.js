var nick;

function userData(nick){
    sessionStorage.setItem('nick', nick.value);
}

function getUserData(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function validateNickNotNull(){
    if(nick == null){
        sessionStorage.setItem('error', "No se ha rellenado el formulario correctamente.");
        return false;
    }
    return true;
}

function createNewRegister(nick){
    return {
        user : nick,
        date : Date.now()
    }
}
function createHistorical(nick){
    let historicalStorage = localStorage.getItem('historical');
    let historical;

    historicalStorage == null ? historical = [] : historical = JSON.parse(historicalStorage);
    historical.push(createNewRegister(nick));
    localStorage.setItem('historical', JSON.stringify(historical));
}