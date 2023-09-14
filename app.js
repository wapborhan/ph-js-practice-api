const express = require("express");
const app = express();
const port = 3000; // You can choose any available port
const routes = require("./routes.json");
const handlers = require("./handlers");

// Define routes based on the JSON file
for (const route in routes) {
  const { method, handler } = routes[route];

  // Map HTTP methods to Express functions
  app[method.toLowerCase()](route, handlers[handler]);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
