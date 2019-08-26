var canvas, canvasContext;

var blueCar = new CarClass();
var greenCar = new CarClass();

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  
  colorRect(0,0, canvas.width,canvas.height, 'black');
  colorText('Loading...Please wait...', canvas.width/2-50,canvas.height/2-50, 'white');

  loadImages();
}

function startTheGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();

  loadLevel(levelOne);
}

function loadLevel(whichLevel){
  tracksGrid = whichLevel.slice();
  blueCar.reset(carPic, 'Blue Car');
  greenCar.reset(otherCarPic, 'Green Car');
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll(){
  
  blueCar.move();
  greenCar.move();
  
  //colorText(mouseTrackCol+','+mouseTrackRow+':'+trackIndexUnderMouse, mouseX,mouseY, 'white');
}

function drawAll(){

  drawTracks();

  blueCar.draw();
  greenCar.draw();

}
