
var trackPics = [];
var carPic = document.createElement('img');
var otherCarPic = document.createElement('img');
var picsToLoad = 0;

function countdownForLoadingImages(){
  picsToLoad--;
  if (picsToLoad === 0) {
    startTheGame();
  }
}

function beginImageLoading(imgVar, fileName){
  imgVar.onload = countdownForLoadingImages();
  imgVar.src = 'images/' + fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement('img');
  beginImageLoading(trackPics[trackCode], fileName);
}

function loadImages(){

  var imagesList = [
    { varName: carPic, fileName: 'player1car.png'},
    { varName: otherCarPic, fileName: 'player2car.png'},
    { trackType: TRACK_ROAD, fileName: 'track_road.png'},
    { trackType: TRACK_WALL, fileName: 'track_wall.png'},
    { trackType: TRACK_GOAL, fileName: 'track_goal.png'},
    { trackType: TRACK_TREES, fileName: 'track_trees.png'},
    { trackType: TRACK_FLAG, fileName: 'track_flag.png'}
  ];

  /**
    const TRACK_WALL = 1;
    const TRACK_ROAD = 0;
    const TRACK_PLAYERSTART = 2;
    const TRACK_GOAL = 3;
    const TRACK_TREES = 4;
    const TRACK_FLAG = 5; 
   */ 

  picsToLoad = imagesList.length;

  for (var i=0;i<imagesList.length;i++) {
    if (imagesList[i].varName !== undefined) {
      beginImageLoading(imagesList[i].varName, imagesList[i].fileName);
    } else {
      loadImageForTrackCode(imagesList[i].trackType, imagesList[i].fileName);
    }
    
  }

}
