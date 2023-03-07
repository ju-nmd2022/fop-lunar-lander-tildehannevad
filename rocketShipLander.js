// setup in browser

// the following three lines of code (4, 5, 6) is retrived from https://www.youtube.com/watch?v=isI3J1JYEag 02-27-23
function setup() {
  createCanvas(900, 800);
  frameRate(30);
}

// all seprate functions

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
  fill(251, 135, 35);
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

function replayButton(x, y, w, h) {
  fill(0, 204, 102);
  rect(x, y, w, h);
  fill(0, 0, 0);
  textSize(20);
  text("Play again!", x + 50, y + 30);
}

function mousePressed() {
  if (state === "win" || state === "lose") {
    if (
      mouseX > 240 &&
      mouseX < 240 + 200 &&
      mouseY > 650 &&
      mouseY < 650 + 50
    ) {
      replayButtonIsClicked = true;
      isGameActive = true;
      x = 100;
      y = -100;
      velocity = 1;
      acceleration = 0.1;
      speed = 0;
      state = "play";
    }
  }
}

// background nightsky

// the following 10 lines of code (135, 136, 137, 139, 140, 141, 142, 144, 145, 146) is retrived from https://pixelkind.github.io/foundationsofprogramming/programming/15-07-example 13-02-23
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 700; i++) {
  const x = Math.floor(Math.random() * 900);
  const y = Math.floor(Math.random() * 800);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

// start, play and end screen

// the following 7 lines of code (152, 153, 154, 156, 157, 158, 159) is retrived from https://pixelkind.github.io/foundationsofprogramming/programming/15-07-example 13-02-23
function startScreen() {
  noStroke();
  background(0, 0, 50);

  for (let index in starX) {
    fill(255, 255, 180, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  rocketShip(300, 100, 1.3);
  fill(255, 255, 255);
  textSize(20);
  text(
    "Help Axel and his rocket ship to land on a new unexplored planet.",
    50,
    170
  );
  text(
    "But be careful, if you land too fast he will not make it!! 🙀",
    50,
    200
  );
  text("Press 'space' to start and good luck!!", 90, 620);
  text("How to play?", 50, 300);
  triangle(150, 420, 160, 400, 170, 420);
  textSize(15);
  text("UP", 150, 440);
  triangle(90, 455, 110, 465, 110, 445);
  text("LEFT", 80, 485);
  triangle(210, 445, 210, 465, 235, 455);
  text("RIGHT", 200, 485);

  if (keyIsDown(32)) {
    state = "play";
  }
}

// the following 7 lines of code (191, 192, 193, 195, 196, 197, 198) is retrived from https://pixelkind.github.io/foundationsofprogramming/programming/15-07-example 13-02-23
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
    state = "win";
  } else if (y > 570) {
    isGameActive = false;
    speed = 0;
    state = "lose";
  }
}

// the following 7 lines of code (237, 238, 239, 241, 242, 243, 244) is retrived from https://pixelkind.github.io/foundationsofprogramming/programming/15-07-example 13-02-23
function winScreen() {
  noStroke();
  background(0, 0, 50);

  for (let index in starX) {
    fill(255, 255, 180, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  replayButton(240, 650, 200, 50);
  fill(255, 255, 255);
  text("Thank you for helping Axel land safely!! ❤️", 100, 250);
  rocketShip(300, 100, 1.3);
}

// the following 7 lines of code (253, 254, 255, 257, 258, 259, 260) is retrived from https://pixelkind.github.io/foundationsofprogramming/programming/15-07-example 13-02-23
function loseScreen() {
  noStroke();
  background(0, 0, 50);

  for (let index in starX) {
    fill(255, 255, 180, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  replayButton(240, 650, 200, 50);
  fill(255, 255, 255);
  text("Be more careful!! Axel did not make it this time... 🥲", 100, 250);
  rocketShip(300, 100, 1.3);
  stroke(255, 25, 80);
  strokeWeight(10);
  line(400, 300, 750, 560);
  stroke(255, 25, 80);
  strokeWeight(10);
  line(750, 300, 400, 560);
}

let x = 100;
let y = -100;
let velocity = 1;
let acceleration = 0.1;
let speed = 0;
let isGameActive = true;

let state = "start";
let replayButtonIsClicked = false;

// draw function

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "play") {
    gameScreen();
    rocketShip(x, y, 0.3);
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }
}
