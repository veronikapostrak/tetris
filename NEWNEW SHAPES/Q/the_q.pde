PImage the_q1;
float s = 59.55;

int[][] Q = {
  {0, 0, 1},
  {1, 1, 1},
  {1, 1, 0}
};

void setup() {
  size(600, 600);
  background(255);
  noFill();
  stroke(153);
  
  the_q1 = loadImage("the_q1.png");
}

void draw() {
  background(255);
  translate(width / 2 - 1.5 * s, height / 2 - 1.5 * s);

  // draw outline based on grid
  noFill();
  stroke(153);
  for (int row = 0; row < Q.length; row++) {
    for (int col = 0; col < Q[0].length; col++) {
      if (Q[row][col] == 1) {
        rect(col * s, row * s, s, s);
      }
    }
  }

  // overlay the image
  image(the_q1, 0, 0, 3 * s, 3 * s);
}
