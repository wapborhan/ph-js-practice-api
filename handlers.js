const knowledgeCafe = require("./knowledge-cafe/knowledge-cafe.json");
const memorableWaterBottle = require("./memorable-water-bottle/memorable-water-bottle.json");

exports.helloWorld = (req, res) => {
  res.send("Hello, World!");
};

exports.knowledgeCafe = (req, res) => {
  // Implement logic to fetch users from a database or other data source
  res.json(knowledgeCafe);
};

exports.memorableWaterBottle = (req, res) => {
  // Implement logic to fetch posts from a database or other data source
  res.json(memorableWaterBottle);
};
