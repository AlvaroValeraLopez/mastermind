function fillFormData(){
    document.getElementById('nick').value = sessionStorage.getItem('nick');
    document.getElementById('avatar').src = sessionStorage.getItem('avatar');
}

function loadGame(){
    let size = parseInt(sessionStorage.getItem('size'));
    createGrid(size);
    createDots(size);
    
}
function createGrid(gridSize){
    document.getElementById('game').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('game').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}
function getRandomColor(){
    let colors = ['green', 'red'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function createDots(columnSize){
    let items = "";
    
    for(let i = 0; i < Math.pow(columnSize, 2); i++)
        items +=  `<div class="containerItem"><div class="item ${getRandomColor()}"></div></div>`;

    document.getElementById('game').innerHTML = items;
}
getUserData();
if(!validateNickNotNull()) location="./index.html";
fillFormData();
loadGame();