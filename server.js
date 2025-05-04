const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

const SCORE_FILE = "scores.json";

app.use(express.json());
app.use(express.static("public"));

// Save score endpoint
app.post("/api/save-score", (req, res) => {
  const { name, score } = req.body;
  let scores = [];

  if (fs.existsSync(SCORE_FILE)) {
    // Read the current scores from the file
    scores = JSON.parse(fs.readFileSync(SCORE_FILE)) ?? [];
  }

  // Add a new score to the array
  scores.push({ name, score });

  // Sort the array by score
  scores.sort((a, b) => b.score - a.score);

  // Save the scores to a JSON file
  fs.writeFileSync(SCORE_FILE, JSON.stringify(scores, null, 2));
  res.json({ success: true });
});

// Get top scores endpoint
app.get("/api/leaderboard", (req, res) => {
  if (fs.existsSync(SCORE_FILE)) {
    const scores = JSON.parse(fs.readFileSync(SCORE_FILE));
    // Return the first 10 entries (already sorted)
    res.json(scores.slice(0, 10));
  } else {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
  console.log(`Client running on: http://localhost:${PORT}/index.html`);
});
