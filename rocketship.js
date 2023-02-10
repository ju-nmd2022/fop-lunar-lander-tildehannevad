// let x = 200;
// let y = 200;
// let s = 1;

// background
background(255, 255, 255);

function rocketShip(x, y, s) {
  noStroke();

  // body of rocketship
  fill(255, 0, 0);
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
  fill(0, 0, 0, 30);
  arc(x * s, (y + 70) * s, (x - 50) * s, y * s, PI, radians(360));
}

function draw() {
  background(255, 255, 255);
  rocketShip(200, 200, 1);
}
