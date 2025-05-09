//PImage the_d2;
float s = 59.55; // size of each cell (unit size)

// "D" shape represented in a grid: 3 rows x 2 columns
int[][] D = {
  {0, 1, 0},  // y = 0 (top row)
  {1, 1, 0},  // y = 1
  {1, 1, 0}   // y = 2 (bottom row)
};

void setup() {
  size(600, 600);
  background(255);
  noFill();
  stroke(150);
  
 // the_d2 = loadImage("the_d2.png");
}

void draw() {
  background(255);
  
  translate(width / 2 - 1.5 * s, height / 2 - 1.5 * s); // center shape

  // draw outline from 2D array
  noFill();
  stroke(150);
  for (int row = 0; row < D.length; row++) {
    for (int col = 0; col < D[0].length; col++) {
      if (D[row][col] == 1) {
        rect(col * s, row * s, s, s);
      }
    }
  }

  // draw image aligned
  //image(the_d2, 0, 0, 3 * s, 3 * s); // Adjust size if needed
}
