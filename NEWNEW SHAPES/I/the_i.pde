int[][] I = {
  {1},
  {1},
  {1}
};

float s = 59.55;

void setup() {
  size(600, 600);
  background(255);
  noFill();
  stroke(153);
}

void draw() {
  background(255);
  translate(width/2 - 0.5*s, height/2 - 1.5*s); // center 1x3 block

  for (int row = 0; row < I.length; row++) {
    for (int col = 0; col < I[0].length; col++) {
      if (I[row][col] == 1) {
        rect(col * s, row * s, s, s);
      }
    }
  }
}
