
const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.07;
const MIN_SPEED_TO_TURN = 0.5;

class CarClass {
  constructor() {
    this.X = 75;
    this.Y = 75;
    this.ang = 0;
    this.speed = 0;
    this.myCarPic;  //specific car image for every player
    this.name = 'Untitled Car';

    this.keyHeld_Gas = false;
    this.keyHeld_Brake = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.controlKeyUp;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlKeyRight;
  }

  setupInput(upKey,downKey,leftKey,rightKey) {
    this.controlKeyUp = upKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyRight = rightKey;
  }

  move() {

    this.speed *= GROUNDSPEED_DECAY_MULT;
  
    if (this.keyHeld_Gas) {
      this.speed += DRIVE_POWER;
    }
    if (this.keyHeld_Brake) {
      this.speed -= REVERSE_POWER;
    }
    if (Math.abs(this.speed) > MIN_SPEED_TO_TURN ) {
      if (this.keyHeld_TurnLeft) {
        this.ang -= TURN_RATE;
      }
      if (this.keyHeld_TurnRight) {
        this.ang += TURN_RATE;
      }
    }
  
    this.x += Math.cos(this.ang) * this.speed;
    this.y += Math.sin(this.ang) * this.speed;
  
    carTrackHandling(this);

  }

  reset(whichCar, carName){
    this.myCarPic = whichCar;
    this.name = carName;
    this.speed = 0;
    
    for (var eachRow=0; eachRow<TRACK_ROWS; eachRow++) {
      for (var eachCol=0;eachCol<TRACK_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (tracksGrid[arrayIndex] == TRACK_PLAYERSTART) {
          tracksGrid[arrayIndex] = TRACK_ROAD;
          this.ang = -Math.PI / 2;
          this.x = eachCol * TRACK_W + TRACK_W/2;
          this.y = eachRow * TRACK_H + TRACK_H/2;
          return;
        }
      }
    }
    console.log('No player start location found');
  }

  draw() {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);
  }

}
