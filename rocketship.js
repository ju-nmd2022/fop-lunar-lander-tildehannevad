// background
background(255, 255, 255);

function rocketShip(x, y, s) {
  push();
  translate();
  scale(s);
  noStroke();

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

function draw() {
  background(255, 255, 20);
  rocketShip(200, 200, 2);
}
