//PImage the_z1;
float s = 59.55;

int[][] Z = {
  {0, 1, 0},
  {1, 1, 0},
  {1, 0, 0}
};

void setup() {
  size(600, 600);
  background(255);
  noFill();
  stroke(153);
  
 // the_z1 = loadImage("the_z1.png");
}

void draw() {
  background(255);
  translate(width/2 - 1.5 * s, height/2 - 1.5 * s);
  
  // Draw shape outline based on grid
  for (int row = 0; row < Z.length; row++) {
    for (int col = 0; col < Z[0].length; col++) {
      if (Z[row][col] == 1) {
        rect(col * s, row * s, s, s);
      }
    }
  }

  // Draw image
 // image(the_z1, 0, 0, 3 * s, 3 * s);
}
