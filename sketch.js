var hours,seconds,minutes;

hr = hours();
mn = minutes();
sc = seconds();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  function map() {
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr, 0, 60, 0, 360);
}

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(300,300,100,300);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(300,300,100,300);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(300,300,100,300);
  pop();

  drawSprites();
}