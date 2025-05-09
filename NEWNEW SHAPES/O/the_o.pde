//PImage the_c1;
float s = 59.55;

int[][] O = {
  {1,},
};

void setup() {
  size(600, 600);
  background(255);
  noFill();
  stroke(153);
  
//  the_c1 = loadImage("the_c1.png");
}

void draw() {
  background(255);
  translate(width / 2 - 1.5 * s, height / 2 - 1.5 * s);

  // draw outline based on grid
  noFill();
  stroke(153);
  for (int row = 0; row < O.length; row++) {
    for (int col = 0; col < O[0].length; col++) {
      if (O[row][col] == 1) {
        rect(col * s, row * s, s, s);
      }
    }
  }

  // overlay the image
  //image(the_c1, 0, 0, 3 * s, 3 * s);
}
