const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS = 20;
const TRACK_GAP = 2;
const TRACK_ROWS = 15;

var levelOne = [4, 4, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  4, 4, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                  4, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
                  1, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
                  1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
                  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                  1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                  1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4,
                  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4];

var tracksGrid = [];
      
const TRACK_WALL = 1;
const TRACK_ROAD = 0;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREES = 4;
const TRACK_FLAG = 5;

function rowColToArrayIndex(col, row) {
  return col + TRACK_COLS * row;
}

function returnTileAtColRow(col,row) {
  if (col >=0 && col < TRACK_COLS && row >=0 && row < TRACK_ROWS) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return tracksGrid[trackIndexUnderCoord];
  } else {
    return TRACK_WALL;
  }
  
}

function carTrackHandling(whichCar) {
  var carTrackCol = Math.floor(whichCar.x / TRACK_W);
  var carTrackRow = Math.floor(whichCar.y / TRACK_H);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  if (carTrackCol >=0 && carTrackCol < TRACK_COLS && carTrackRow >=0 && carTrackRow < TRACK_ROWS) {

    var tileHere = returnTileAtColRow(carTrackCol, carTrackRow);
    if (tileHere === TRACK_GOAL) {
      console.log('The winner is: ', whichCar.name);
      loadLevel(levelOne);
    } else if (tileHere !== TRACK_ROAD) {
      whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
      whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
      whichCar.speed *= -.5;
    }
      
  }
    
}

function drawTracks() {

  var arrayIndex = 0;
  var drawTileX = 0;
  var drawTileY = 0;

  for (var eachRow=0; eachRow<TRACK_ROWS; eachRow++) {
    for (var eachCol=0;eachCol<TRACK_COLS; eachCol++) {
      var tileKind = tracksGrid[arrayIndex];
      var useImg;
      useImg = trackPics[tileKind];
      canvasContext.drawImage(useImg, drawTileX, drawTileY);

      drawTileX += TRACK_W;
      arrayIndex++;
    }
    drawTileY += TRACK_H;
    drawTileX = 0;
  }
}