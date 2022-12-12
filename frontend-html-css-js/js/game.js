var dotChoosen = false;
var size;
var adyacents = [];
var choosenDots = [];
var classMarcada;

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
function adyacentDots(dotId){
    
    adyacents = [];

    if((dotId-size)>=0) adyacents.push(dotId-size);
    if((dotId+size)<(Math.pow(size, 2))) adyacents.push(dotId+size);
    if((dotId%size)>0) adyacents.push(dotId-1);
    if(((dotId+1)%size)>0) adyacents.push(dotId+1);
    
}


function mousedownEventFunction(event){
    dotChoosen = true;
    selectDot(event);
    adyacentDots(parseInt(event.target.id));
}
function selectDot(event){
    let container = event.target.parentElement;
    choosenDots.push(parseInt(event.target.id));
    if (event.target.classList.contains('red')){
        classMarcada = "red";
        container.classList.add('red')
    }else{
        classMarcada = "green";
        container.classList.add('green');
    }
}
function overElementFunction(event){
    
    let dotId = parseInt(event.target.id);

    if(dotChoosen && adyacents.includes(dotId) && event.target.classList.contains(classMarcada)){
        selectDot(event);
        adyacentDots(dotId);
    }
    
}
function updateScore(points){
    let score = parseInt(document.getElementById('score').value)
    score += points;
    document.getElementById('score').value = score;
    console.log(score);
}
function mouseupEventFunction(event){
    dotChoosen = false;
    
    if(choosenDots.length == 1)
        document.getElementById(choosenDots[0]).parentElement.classList.remove(classMarcada);

    if(choosenDots.length > 1){
        updateScore(choosenDots.length);
        choosenDots.forEach( dotId => {
            document.getElementById(dotId).parentElement.classList.remove(classMarcada);
            document.getElementById(dotId).classList.remove(classMarcada);
            document.getElementById(dotId).classList.add(getRandomColor());
        });
    }

    choosenDots = [];
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