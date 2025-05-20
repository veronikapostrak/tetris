let grid = 59;
let cols = 20;
let rows = 10;
let header = 80;
let playfield = [];
let tetromino;
let tetrominoSequence = [];
let colors;
let tetrominos;
let count = 0;
let lastScoreIncrement = 0;
let gameOver = false;
let score = 0;
let speed = 2;
let timerStart;
let gameStarted = false;
let sound;
let teamName;
let scoreSaved = false;
let leaderboardData = [];
let tetrominoImages;
const specialShapes = ["I", "O", "Z", "C", "D", "M", "Q", "R"];

const teamNames = [
  "404 Team Name Not Found",
  "8-Bit Bandit",
  "Ain't Got a Clue",
  "Arcade Anarchists",
  "ArcadeAce",
  "ArcadeAdventurer",
  "Avengers of Laziness",
  "Awesomesauce",
  "Bacon Lovers Anonymous",
  "Bad Decisions Club",
  "BassDropper",
  "Bassline Assassin",
  "Bassline Bandit",
  "BassWaves",
  "Bassy McBassface",
  "Beat Junkie",
  "Beer Pressure",
  "Better Late Than Pregnant",
  "Big Dills",
  "Binge Thinkers",
  "BitBrawler",
  "BlastFromPast",
  "Block Battalion",
  "Block Blasters",
  "Block Blitzers",
  "Block Bloom",
  "Block Brigade",
  "Block Crusaders",
  "Block Genesis",
  "Block Mavericks",
  "Block Party",
  "Block Renegades",
  "Block Rushers",
  "Block Surge",
  "Block Syndicate",
  "Blockade",
  "Blockatrix",
  "BlockBeast",
  "BlockBenders",
  "BlockBreak Battalion",
  "Blockburst",
  "Blockbuster",
  "BlockChop",
  "BlockFreaks",
  "BlockFusion",
  "Blockhead",
  "BlockJolt",
  "Blockquake",
  "Blocksmith",
  "Blockstormers",
  "Blocktopia",
  "Blockwave",
  "Blockzilla",
  "Born to Lose",
  "Breakbeat Beast",
  "Breakbeat Brawler",
  "ByteBattler",
  "Cereal Killers",
  "Chafing the Dream",
  "Chicken Nugget Gang",
  "Chill Pill Champions",
  "Clear Chasers",
  "Clear Craze",
  "Clear Crew",
  "Clear Kings",
  "Clear Knights",
  "Clear Quest",
  "Clear Raiders",
  "Cleared & Fearless",
  "ClearForce",
  "Clearing Commanders",
  "Clearmaster",
  "Clearwave Crew",
  "ConsoleCowboy",
  "Couch Potatoes",
  "Ctrl Alt Defeat",
  "Ctrl Freaks",
  "Disney Minus",
  "DnB Dynamo",
  "Don’t Stop Ballieving",
  "Dreadnought DnB",
  "DrumCycle",
  "Drumline Dictator",
  "Drunkin' Donuts",
  "Duck Duck Losers",
  "Dunder Mifflin A-Team",
  "DungeonDelver",
  "Dynamite Drummer",
  "Epic Failures",
  "Fantastic Four-gettables",
  "Fast, but Last",
  "Flaming Hot Cheetahs",
  "Full House, Half Brain",
  "Game of Throws",
  "GameGuru",
  "GameOverlord",
  "GlitchMaster",
  "Goats on Boats",
  "Grillin’ Me Softly",
  "Groove Guardian",
  "Hide and Zeke",
  "High Score Heroes",
  "HighScoreHunter",
  "Hungry Hungry Hipsters",
  "Insert Cool Name Here",
  "Jedi Mind Tricks",
  "Jungle Jester",
  "Jungle Prophet",
  "Jungle Vortex",
  "Knights Who Say Ni",
  "Legends of the Hidden Temple Guards",
  "LevelUp",
  "Line Breakers",
  "Line Clear Legends",
  "Line Hustlers",
  "Line Lifters",
  "Line Lords",
  "Line Outlaws",
  "Lineage",
  "LineBuster",
  "LineRiders",
  "LineShifters",
  "LineSlinger",
  "LineSweepers",
  "LineWarrior",
  "LOLcano",
  "Low Expectations",
  "Mandatory Fun Squad",
  "Mild Stallions",
  "Mission Unblockable",
  "Nacho Average Squad",
  "Nap Queens",
  "Nerd Immunity",
  "NeuroFunk Ninja",
  "NeuroPulse",
  "Non-Stop Nonsense",
  "NostalgiaNinja",
  "Not Fast, Just Furious",
  "Panic at the Quizco",
  "Pasta la Vista, Baby",
  "Pastabilities",
  "Pickle Rick Squad",
  "Pigs Might Fly",
  "Pixel Command",
  "Pixel Defenders",
  "Pixel Knights",
  "Pixel Phantoms",
  "Pixel Predators",
  "Pixel Pulse",
  "Pixel Pusher",
  "Pixel Rebels",
  "Pixel Surge",
  "Pixelated",
  "PixelPaladin",
  "PixelPivot",
  "PixelProwler",
  "PixelRush",
  "PixelSmasher",
  "PixelStorm",
  "Professional Procrastinators",
  "Pun and Games",
  "Punderdogs",
  "Puzzle Guardians",
  "Puzzle Knights",
  "Puzzle Patrol",
  "Puzzle Pioneers",
  "Puzzle Pirates",
  "Puzzle Pulse",
  "Puzzle Pulsewave",
  "Puzzle Pushers",
  "Puzzle Tacticians",
  "PuzzleCrafter",
  "Puzzleforge",
  "Puzzlefront",
  "PuzzleMasters",
  "PuzzlePal",
  "PuzzlePunk",
  "PuzzleRushers",
  "PuzzleStorm",
  "Puzzletron",
  "PuzzleVortex",
  "PuzzleWreckers",
  "Quaran-Team",
  "QuestKnight",
  "Resting Quiz Face",
  "Retro Crusade",
  "Retro Gliders",
  "Retro Nomads",
  "Retro Pixels",
  "Retro Rebels",
  "Retro Rumble",
  "Retrograde",
  "RetroRaider",
  "RetroRanger",
  "RetroRascal",
  "RetroRevival",
  "RetroStack",
  "Retroverse",
  "RetroVision",
  "Reverb Renegade",
  "Rhythm Raider",
  "Rhythm Rebel",
  "Rhythm Ripper",
  "Rhythm Ruckus",
  "Risky Quizness",
  "Runs With Scissors",
  "Sassy Sasquatches",
  "Sherlock Homies",
  "Shrekfast Club",
  "Silent But Deadly",
  "Smarty Pints",
  "Snap, Crackle, Pop",
  "Sofa Kingdom",
  "Sonic Shifter",
  "Sonic Storm",
  "Sons of Pitches",
  "Sore Winners",
  "Spoons of Fury",
  "Stack Architects",
  "Stack Attack",
  "Stack Bandits",
  "Stack Kings",
  "Stack Raiders",
  "Stack Rebels",
  "Stack Savants",
  "Stack Shifters",
  "Stack Slicers",
  "Stack Smashers",
  "Stack Strikers",
  "Stack Surgeons",
  "StackHero",
  "StackJammer",
  "StackMaster",
  "StackSquad",
  "Stackster",
  "Stackstormers",
  "Stacktastic",
  "StackWizards",
  "Straight Outta Options",
  "SubBass Sorcerer",
  "Subsonic Samurai",
  "Subwoofer Shenanigans",
  "Tacos Before Vatos",
  "Talk Nerdy to Me",
  "Tempo Titan",
  "Tempo Trickster",
  "Tetrabyte",
  "Tetrafuse",
  "TetraGliders",
  "Tetralicious",
  "Tetramorphs",
  "Tetranation",
  "TetraNinja",
  "Tetrapunks",
  "Tetrashock",
  "TetraVortex",
  "Tetrawarriors",
  "Tetris Nomads",
  "Tetris Overdrive",
  "Tetris Tacticians",
  "Tetrisaurus",
  "Tetriseers",
  "Tetrispiration",
  "Tetrithon",
  "Tetrizoid",
  "Tetroblast",
  "Tetroblitz",
  "Tetrocade",
  "Tetrocrats",
  "Tetroid Force",
  "Tetromagic",
  "Tetromancer",
  "Tetromaniac",
  "Tetromino Titans",
  "Tetromix",
  "Tetronado",
  "Tetronauts",
  "Tetronauts United",
  "Tetronergy",
  "Tetropulse",
  "TetroTornado",
  "The Awkward Turtles",
  "The Banana Bunch",
  "The Be Sharps",
  "The Bro-Teen Shake",
  "The Cunning Linguists",
  "The Fast and the Curious",
  "The Fighting Koalas",
  "The Flaming Marshmallows",
  "The Ice Cream Truck Chasers",
  "The Last Picks",
  "The Meme Team",
  "The Mighty Morphin Flower Arrangers",
  "The Potato Alliance",
  "The Quizzly Bears",
  "The Rolling Phones",
  "The Salty Pretzels",
  "The Witty Committee",
  "Vibe Architect",
  "Victim of Circum-stance",
  "Victorious Secret",
  "Wannabe Winners",
  "We Thought This Was Bingo",
  "Whiskey Business",
  "Win or Booze",
  "Wobble Wombat",
  "Yeti to Party",
  "You Can't Quiz With Us",
  "Zoom and Gloom",
];
const usedTeamNames = [];

function preload() {
  sound = loadSound("sounds/theme.mp3");
  gameOverSound = loadSound("sounds/gameOver.mp3");
  rowCleared = loadSound("sounds/rowCleared.mp3");
}

function setup() {
  createCanvas(grid * cols, grid * rows + header);
  frameRate(60);
  timerStart = millis();
  initPlayfield();
  initTetrominos();
}

function draw() {
  if (!gameStarted) {
    drawPreloadScreen();
    return;
  }

  if (gameOver) {
    drawGameOverScreen();
    return;
  }

  background(0);
  drawScore();
  drawTimer();
  drawPlayfield();
  drawTetromino();
  drawTeamName();

  if (millis() - lastScoreIncrement >= 1000) {
    score += 10;
    lastScoreIncrement = millis();
  }

  if (++count > speed) {
    tetromino.col++;
    count = 0;

    if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
      tetromino.col--;
      placeTetromino();
    }
  }
}

function keyPressed() {
  if (key === " ") {
    if (gameOver) {
      startGame();
    } else if (!gameStarted) {
      startGame();
    }
    return;
  }

  if (gameOver || !gameStarted) {
    return;
  }

  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    let row = keyCode === UP_ARROW ? tetromino.row - 1 : tetromino.row + 1;
    if (isValidMove(tetromino.matrix, row, tetromino.col)) {
      tetromino.row = row;
    }
  } else if (keyCode === RIGHT_ARROW) {
    let col = tetromino.col + 1;
    if (!isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col - 1;
      placeTetromino();
      return;
    }
    tetromino.col = col;
  } else if (keyCode === LEFT_ARROW) {
    let rotated = rotateMatrix(tetromino.matrix);
    if (isValidMove(rotated, tetromino.row, tetromino.col)) {
      tetromino.matrix = rotated;
    }
  }
}

function startGame() {
  playfield = [];
  count = 0;
  score = 0;
  gameOver = false;
  scoreSaved = false;
  tetrominoSequence = [];
  initPlayfield();
  initTetrominos();
  teamName = getTeamName();
  tetromino = getNextTetromino();
  timerStart = millis();
  gameStarted = true;
  lastScoreIncrement = millis();

  if (sound.isPlaying()) {
    sound.stop();
  }
  sound.loop();
}

function getTeamName() {
  if (usedTeamNames.length === teamNames.length) {
    return "ALL TEAM NAMES USED!";
  }

  let name = teamNames[Math.floor(Math.random() * teamNames.length)];

  if (usedTeamNames.includes(name)) {
    return getTeamName();
  }

  usedTeamNames.push(name);
  return name;
}

function endGame() {
  gameOver = true;
  if (sound.isPlaying()) {
    sound.stop();
  }
  if (gameOverSound.isPlaying()) {
    gameOverSound.stop();
  } else {
    gameOverSound.play();
  }
}

function initPlayfield() {
  for (let row = -2; row < rows; row++) {
    playfield[row] = [];
    for (let col = 0; col < cols; col++) {
      playfield[row][col] = 0;
    }
  }
}

function initTetrominos() {
  tetrominos = {
    I: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    O: [
      [1, 1],
      [1, 1],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    C: [
      [0, 1, 0],
      [0, 0, 1],
      [0, 0, 1],
    ],
    D: [
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 1],
    ],
    M: [
      [0, 1, 1],
      [1, 1, 1],
      [0, 1, 0],
    ],
    Q: [
      [0, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
    ],
    R: [
      [1, 1],
      [1, 0],
    ],
    Z: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
  };

  colors = {
    I: "cyan",
    O: "yellow",
    T: "purple",
    S: "green",
    Z: "red",
    J: "blue",
    L: "orange",
    C: "pink",
    D: "brown",
    M: "lightblue",
    Q: "lightgreen",
    R: "lightyellow",
  };

  tetrominoImages = {
    I: loadImage("icons/the_i.png"),
    O: loadImage("icons/the_o1.png"),
    T: null,
    S: null,
    Z: loadImage("icons/the_z1.png"),
    Z: loadImage("icons/the_z.png"),
    J: null,
    L: null,
    C: loadImage("icons/the_c1.png"),
    D: loadImage("icons/the_d2.png"),
    M: loadImage("icons/the_m1.png"),
    Q: loadImage("icons/the_q1.png"),
    R: loadImage("icons/the_r1.png"),
  };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSequence() {
  // const sequence = ["I", "J", "L", "O", "S", "T", "Z", "C", "D", "M", "Q", "R"]; // all tetrominos
  const sequence = [...specialShapes]; // only special shapes
  while (sequence.length) {
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    tetrominoSequence.push(name);
  }
}

function getNextTetromino() {
  if (tetrominoSequence.length === 0) generateSequence();

  const name = tetrominoSequence.pop();
  const matrix = tetrominos[name];
  const row = Math.floor(rows / 2 - Math.ceil(matrix.length / 2));
  const col = name === "I" ? -1 : -2;

  return {
    name,
    matrix,
    row,
    col,
  };
}

function rotateMatrix(matrix) {
  const N = matrix.length - 1;
  return matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
}

function isValidMove(matrix, row, col) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (
        matrix[r][c] &&
        (row + r < 0 ||
          row + r >= rows ||
          col + c >= cols ||
          playfield[row + r][col + c])
      ) {
        return false;
      }
    }
  }
  return true;
}

function placeTetromino() {
  for (let r = 0; r < tetromino.matrix.length; r++) {
    for (let c = 0; c < tetromino.matrix[r].length; c++) {
      if (tetromino.matrix[r][c]) {
        if (tetromino.col + c < 0) {
          endGame();
          return;
        }
        playfield[tetromino.row + r][tetromino.col + c] = tetromino.name;
      }
    }
  }

  for (let col = cols - 1; col >= 0; ) {
    let full = true;
    for (let row = 0; row < rows; row++) {
      if (!playfield[row][col]) {
        full = false;
        break;
      }
    }

    if (full) {
      score += 500;
      if (rowCleared.isPlaying()) {
        rowCleared.stop();
      } else {
        rowCleared.play();
      }
      for (let c = col; c >= 0; c--) {
        for (let r = 0; r < rows; r++) {
          playfield[r][c] = playfield[r][c - 1];
        }
      }
    } else {
      col--;
    }
  }

  tetromino = getNextTetromino();
}

// function drawPlayfield() {
//   fill(20);
//   noStroke();
//   rect(0, header, width, height - header);

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       const block = playfield[row][col];

//       if (block) {
//         //const img = tetrominoImages[block];
//         if (img) {
//           // Draw the image in the playfield
//           image(
//             img,
//             col * grid,
//             row * grid + header,
//             grid,
//             grid
//           );
//         }
//         else {
//           fill(colors[block]);
//           ellipse(
//             col * grid + grid / 2,
//             row * grid + header + grid / 2,
//             grid * 0.8,
//             grid * 0.8
//           );
//         }
//       } else {
//         fill(30);
//         ellipse(
//           col * grid + grid / 2,
//           row * grid + header + grid / 2,
//           grid * 0.8,
//           grid * 0.8
//         );
//       }
//     }
//   }
// }

function drawPlayfield() {
  fill(20);
  noStroke();
  rect(0, header, width, height - header);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (playfield[row][col]) {
        fill(colors[playfield[row][col]]);
      } else {
        fill(30);
      }

      ellipse(
        col * grid + grid / 2,
        row * grid + header + grid / 2,
        grid * 0.8,
        grid * 0.8
      );
    }
  }
}

function drawTetromino() {
  if (!tetromino) return;

  const img = tetrominoImages[tetromino.name];

  const { offset, width, height } = getOffsetWidthHeightFromImageName(
    tetromino.name
  );

  // Special case for tetrominos with images
  if (specialShapes.includes(tetromino.name)) {
    image(
      img,
      tetromino.col * grid,
      tetromino.row * grid + offset * header,
      grid * width,
      grid * height
    );
    return;
  }

  // General case for other tetrominos
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {
        if (img) {
          image(
            img,
            (tetromino.col + col) * grid,
            (tetromino.row + row) * grid + header,
            grid,
            grid
          );
        } else {
          fill(colors[tetromino.name]);
          ellipse(
            (tetromino.col + col) * grid + grid / 2,
            (tetromino.row + row) * grid + header + grid / 2,
            grid * 0.8,
            grid * 0.8
          );
        }
      }
    }
  }
}

function getOffsetWidthHeightFromImageName(name) {
  let offset, width, height;
  switch (name) {
    case "O":
      offset = 1;
      width = 2;
      height = 2;
      break;
    case "I":
      offset = 1.75;
      width = 4;
      height = 1;
      break;
    case "Z":
      offset = 1.75;
      width = 3;
      height = 2;
      break;
    case "C":
      offset = 1;
      width = 2;
      height = 3;
      break;
    case "D":
      offset = 1;
      width = 2;
      height = 3;
      break;
    case "M":
      offset = 1;
      width = 3;
      height = 3;
      break;
    case "Q":
      offset = 1;
      width = 3;
      height = 3;
      break;
    case "R":
      offset = 1;
      width = 2;
      height = 2;
      break;
    default:
      offset = 1;
      width = 1;
      height = 1;
      break;
  }

  return {
    offset,
    width,
    height,
  };
}

function drawScore() {
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(24);
  text("Score: " + score, 10, 25);
}

function drawTimer() {
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(24);

  let elapsed = Math.floor((millis() - timerStart) / 1000);
  let minutes = Math.floor(elapsed / 60);
  let seconds = elapsed % 60;

  let timeString = nf(minutes, 2) + ":" + nf(seconds, 2);
  text("Time: " + timeString, 10, 55);
}

function drawTeamName() {
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(24);
  text(`Team Name: ${teamName}`, 500, 25);
}

function drawPreloadScreen() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Press BUTTON to Start", width / 2, height / 2);
}

function drawGameOverScreen() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("GAME OVER!", width / 2, 100);
  textSize(24);
  text("Press BUTTON to play again", width / 2, 150);
  textSize(18);
  text(`${teamName} Score: ` + score, width / 2, 180);

  if (!scoreSaved) {
    saveScoreToServer(score, teamName);
    fetchLeaderboard();
    scoreSaved = true;
  }

  displayLeaderboard();
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function saveScoreToServer(score, name) {
  fetch("/api/save-score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ score, name }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Saved:", data));
}

function fetchLeaderboard() {
  fetch("/api/leaderboard")
    .then((res) => res.json())
    .then((data) => (leaderboardData = data));
}

function displayLeaderboard() {
  textSize(16);
  text("Top 10:", width / 2, 300);
  leaderboardData.forEach((entry, i) => {
    text(`${i + 1}. ${entry.name}: ${entry.score}`, width / 2, 340 + i * 20);
  });
}
