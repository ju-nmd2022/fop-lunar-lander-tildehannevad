//----------------------------//
//----------------------------//
// functions

function planet() {
  // planet
  fill(255, 204, 229);
  ellipse(350, 800, 1500, 450);

  noStroke();
  // landing place
  fill(170, 170, 170);
  rect(202, 630, 95, 40);
  fill(240, 30, 10);
  ellipse(250, 630, 100, 30);
}

function tree(x, y, s) {
  // tree
  push();
  translate(x, y);
  scale(s);
  fill(173, 216, 230);
  rect(50, 450, 45, 150);
  fill(255, 255, 255);
  ellipse(30, 450, 50);
  ellipse(50, 410, 50);
  ellipse(90, 400, 50);
  ellipse(120, 430, 50);
  ellipse(110, 470, 50);
  ellipse(70, 470, 50);
  ellipse(80, 450, 70);
  pop();
}

function rocketShip(x, y, s) {
  noStroke();

  // wheels
  fill(0, 0, 0);
  ellipse((x - 100) * s, (y + 100) * s, 35 * s);
  ellipse((x - 30) * s, (y + 115) * s, 35 * s);
  ellipse((x + 40) * s, (y + 113) * s, 35 * s);
  ellipse((x + 105) * s, (y + 95) * s, 35 * s);
  // body of rocketship
  fill(0, 204, 102);
  ellipse(x * s, (y + 70) * s, 250 * s, 90 * s);
  // Axel
  // hair on neck
  fill(139, 69, 19);
  rect((x - 10) * s, (y + 5) * s, 20 * s, 15 * s);
  // neck
  fill(225, 198, 153);
  rect((x - 5) * s, (y + 15) * s, 10 * s, 10 * s);
  // head
  fill(225, 198, 153);
  ellipse(x * s, y * s, 25 * s, 40 * s);
  // shoulders
  beginShape();
  fill(255, 255, 150);
  vertex((x - 20) * s, (y + 70) * s);
  bezierVertex(
    (x - 20) * s,
    (y + 7) * s,
    (x + 25) * s,
    (y + 7) * s,
    (x + 25) * s,
    (y + 70) * s
  );
  endShape();
  // hair
  fill(0, 0, 0);
  ellipse(x * s, (y - 13) * s, 28 * s, 23 * s);
  rect((x - 15) * s, (y - 7) * s, 30 * s, 5 * s);
  fill(139, 69, 19);
  rect((x - 15) * s, (y - 2) * s, 3 * s, 10 * s);
  fill(139, 69, 19);
  rect((x + 10) * s, (y - 2) * s, 3 * s, 10 * s);
  // left eye
  fill(255, 255, 255);
  ellipse((x - 6) * s, (y + 2) * s, 5 * s, 3 * s);
  fill(0, 0, 0);
  ellipse((x - 6) * s, (y + 2) * s, 2 * s, 2 * s);
  // right eye
  fill(255, 255, 255);
  ellipse((x + 6) * s, (y + 2) * s, 5 * s, 3 * s);
  fill(0, 0, 0);
  ellipse((x + 6) * s, (y + 2) * s, 2 * s, 2 * s);
  // nose
  fill(145, 114, 60);
  rect((x - 3) * s, (y + 7) * s, 6 * s, 0.1 * s);
  // mouth
  fill(255, 153, 153);
  arc(x * s, (y + 12) * s, 10 * s, 2 * s, 0, PI);
  // glas roof on rocket ship
  // The following 2 lines of code was adapted from https://www.youtube.com/watch?v=IWLpIJMVRtg&t=18s accessed 23-02-08
  fill(255, 255, 255, 100);
  arc(x * s, (y + 70) * s, (x - 50) * s, y * s, PI, radians(360));
}

let x = 100;
let y = 100;
let speed = 0;

//---------------------------------//
//---------------------------------//

// background
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 700; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

//--------------------------------//
//--------------------------------//
// screens

function gameScreen() {
  noStroke();
  background(0, 0, 50);

  for (let index in starX) {
    fill(255, 255, 180, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  planet();
  tree(20, 100, 1.0);
  tree(400, 220, 0.7);
  tree(540, -110, 1.4);
  rocketShip(200, 200, 0.3);
}

//------------------------------//
//------------------------------//

function draw() {
  gameScreen();
  rocketShip(200, 200, 0.3);

  x = x + speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else {
    speed = 0;
  }
}
