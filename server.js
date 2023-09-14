const express = require("express");
const path = require("path"); // Import the 'path' module

const app = express();

// Define a static directory for serving HTML files
app.use(express.static(path.join(__dirname, "public")));

// Define your Express routes here
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Serve the HTML file at the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the Express server
app.listen(4411, () => {
  console.log("> Ready on http://localhost:4411");
});
