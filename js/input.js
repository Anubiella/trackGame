var mouseX;
var mouseY;

const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

function setupInput(){
  canvas.addEventListener('mousemove', updateMousePos);
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  blueCar.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW);
  greenCar.setupInput(KEY_W, KEY_S, KEY_A, KEY_D);
}

function updateMousePos(e){
  var root = document.documentElement;
  var rect = canvas.getBoundingClientRect();
  
  mouseX = e.clientX - rect.left - root.scrollLeft;
  mouseY = e.clientY - rect.top - root.scrollTop;

}

function keySet(evt, whichCar, setTo) {
  if (evt.keyCode == whichCar.controlKeyLeft) {
    whichCar.keyHeld_TurnLeft = setTo;
   }
  if (evt.keyCode == whichCar.controlKeyRight) {
    whichCar.keyHeld_TurnRight = setTo;
  }
  if (evt.keyCode == whichCar.controlKeyUp) {
    whichCar.keyHeld_Gas = setTo;
  }
  if (evt.keyCode == whichCar.controlKeyDown) {
    whichCar.keyHeld_Brake = setTo;
  }
}

function keyPressed(e){
  keySet(e, blueCar, true);
  keySet(e, greenCar, true);
}

function keyReleased(e){
  keySet(e, blueCar, false);
  keySet(e, greenCar, false);
}