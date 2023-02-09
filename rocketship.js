let x = 200;
let y = 200;
let s = 1.5;

// background
background(255, 255, 255);
noStroke();

// body of rocketship
fill(255, 0, 0);
ellipse(x * s, (y + 70) * s, 250 * s, 90 * s);
// head of Axel
fill(225, 198, 153);
ellipse((x + 150) * s, (y + 200) * s, 30 * s, 50 * s);
// neck of Axel
fill(225, 198, 153);
rect((x + 145) * s, (y + 223) * s, 10 * s, 10 * s);
// shoulders of Axel
beginShape();
fill(173, 216, 230);
vertex((x + 120) * s, (y + 280) * s);
bezierVertex(
  (x + 120) * s,
  (y + 215) * s,
  (x + 180) * s,
  (y + 215) * s,
  (x + 180) * s,
  (y + 280) * s
);
endShape();
// hair of Axel
fill(0, 0, 0);
ellipse((x + 325) * s, (y + 375) * s, 40 * s, 30 * s);

// I took the arc part from a youtube video
// https://www.youtube.com/watch?v=IWLpIJMVRtg&t=18s
fill(0, 0, 0, 30);
arc(x * s, (y + 70) * s, (x - 50) * s, y * s, PI, radians(360));
