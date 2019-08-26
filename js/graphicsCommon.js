function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
  canvasContext.restore();
}

function colorRect(topX,topY, boxWidth,boxHeight, fillColor){
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topX,topY, boxWidth,boxHeight);
};

function colorCircle(centerX,centerY, radius, startAngle,endAngle, clockWise, fillColor ){
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY, radius, startAngle,endAngle, clockWise);
  canvasContext.fill();
};

function colorText(showWords, topX,topY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, topX,topY);
}