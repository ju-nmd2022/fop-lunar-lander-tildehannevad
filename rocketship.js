let x = 200;
let y = 200;
let s = 1.0;

// background
background(255, 255, 255);
noStroke();

// body of rocketship
fill(255, 0, 0);
ellipse(x * s, (y + 70) * s, 250 * s, 90 * s);
// head
fill(225, 198, 153);
ellipse((x + 150) * s, (y + 200) * s, 30 * s, 50 * s);

// neck
fill(225, 198, 153);
rect((x + 145) * s, (y + 223) * s, 10 * s, 10 * s);

// shoulders
beginShape();
fill(173, 216, 230);
vertex();
bezierVertex();
endShape();

stroke(0, 0, 0);
fill(0, 0, 0);
line(230, 560, 222, 650);
line(355, 560, 360, 650);
// I took the arc part from a youtube video
// https://www.youtube.com/watch?v=IWLpIJMVRtg&t=18s
fill(0, 0, 0, 30);
arc(x * s, (y + 70) * s, (x - 50) * s, y * s, PI, radians(360));
