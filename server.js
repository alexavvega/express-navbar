const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/climate-crisis", (req, res) => {
  res.redirect("https://github.com/alexavvega/Climate-Crisis");
});

app.get("/typesetting", (req, res) => {
  res.redirect("https://github.com/alexavvega/typesetting");
});

app.get("/four-algorithms", (req, res) => {
  res.redirect("https://github.com/alexavvega/Four-Sorting-Algorithms/blob/main/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
