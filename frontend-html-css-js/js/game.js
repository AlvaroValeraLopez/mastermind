var dotChoosen = false;
var size;
var overDotId;
function fillFormData(){
    document.getElementById('nick').value = sessionStorage.getItem('nick');
    document.getElementById('avatar').src = sessionStorage.getItem('avatar');
}

function loadGame(){
    size = parseInt(sessionStorage.getItem('size'));
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
        items +=  `<div class="containerItem"><div id="${i}"class="item ${getRandomColor()}"></div></div>`;

    document.getElementById('game').innerHTML = items;
}
function adyacentDots(){
    let adyacents=[];
    
    if((overDotId-size)>=0) adyacents.push(overDotId-size);
    if((overDotId+size)<(Math.pow(size, 2))) adyacents.push(overDotId+size);
    if((overDotId%size)>0) adyacents.push(overDotId-1);
    if(((overDotId+1)%size)>0) adyacents.push(overDotId+1);

    console.log(adyacents);
    
}
function mousedownEventFunction(event){
    let container = event.target.parentElement;
    event.target.classList.contains('red') ? container.classList.add('red') : container.classList.add('green');
    dotChoosen = true;
}
function overElementFunction(event){
    overDotId = event.target.id;
    adyacentDots();
    if(dotChoosen)    mousedownEventFunction(event);
}

function mouseupEventFunction(event){
    dotChoosen = false;
}

function addItemsEvents(){
    let items = Array.from(document.getElementsByClassName('item'));
    items.forEach(item => {
        item.addEventListener('mousedown', mousedownEventFunction);
        item.addEventListener('mouseover', overElementFunction);
    });
    document.addEventListener('mouseup', mouseupEventFunction);
}

getUserData();
if(!validateNickNotNull()) location="./index.html";
fillFormData();
loadGame();
addItemsEvents();