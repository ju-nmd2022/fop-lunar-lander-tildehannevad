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

  push();
  translate(x, y);
  scale(s);

  // wheels
  fill(0, 0, 0);
  ellipse(110, 300, 35);
  ellipse(170, 315, 35);
  ellipse(230, 315, 35);
  ellipse(290, 300, 35);
  // body of rocketship
  fill(0, 204, 102);
  ellipse(200, 270, 250, 90);
  // Axel
  // hair on neck
  fill(139, 69, 19);
  rect(190, 210, 20, 15);
  // neck
  fill(225, 198, 153);
  rect(195, 224, 10, 10);
  // head
  fill(225, 198, 153);
  ellipse(200, 195, 35, 60);
  // shoulders
  beginShape();
  fill(255, 255, 150);
  vertex(180, 270);
  bezierVertex(175, 215, 225, 215, 225, 270);
  endShape();
  // hair
  fill(0, 0, 0);
  ellipse(200, 175, 35, 25);
  rect(183, 180, 35, 10);
  fill(139, 69, 19);
  rect(182, 190, 4, 15);
  fill(139, 69, 19);
  rect(215, 190, 4, 15);
  // left eye
  fill(255, 255, 255);
  ellipse(194, 199, 7, 4);
  fill(0, 0, 0);
  ellipse(194, 199, 3, 3);
  // right eye
  fill(255, 255, 255);
  ellipse(207, 199, 7, 4);
  fill(0, 0, 0);
  ellipse(207, 199, 3, 3);
  // nose
  fill(145, 114, 60);
  rect(196, 207, 8, 0.1);
  // mouth
  fill(255, 153, 153);
  arc(200, 214, 10, 2, 0, PI);
  // glas around head
  fill(255, 255, 255, 100);
  ellipse(200, 200, 80);
  pop();
}

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

function startScreen() {
  noStroke();
  background(0, 0, 50);

  for (let index in starX) {
    fill(255, 255, 180, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
}

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

  x = x + speed;

  if (isGameActive) {
    y = y + velocity;
    velocity = velocity + acceleration;
  }

  if (keyIsDown(39)) {
    speed = 7;
  } else if (keyIsDown(37)) {
    speed = -7;
  } else {
    speed = 0;

    if (keyIsDown(38)) {
      velocity = velocity - 0.5;
    }
  }

  if (y > 530 && x > 100 && x < 200 && velocity <= 5) {
    isGameActive = false;
    speed = 0;
  } else if (y > 570) {
    isGameActive = false;
    speed = 0;
  }
}

let x = 100;
let y = -100;
let velocity = 1;
let acceleration = 0.1;
let speed = 0;
let isGameActive = true;

let state = "start";

//------------------------------//
//------------------------------//

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "play") {
    gameScreen();
    rocketShip(x, y, 0.3);
  }
}
