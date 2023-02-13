// background
fill(255, 204, 229);
ellipse(350, width, 1500, 400);


noStroke();
// landing place
fill(170, 170, 170);
rect(202, 530, 95, 40);
fill(240, 30, 10);
ellipse(250, 530, 100, 30);

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

function draw() {
  tree(20, 10, 1.0);
  tree(400, 100, 0.7);
  tree(480, - 130, 1.4);
}
