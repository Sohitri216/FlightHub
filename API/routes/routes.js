const flightRoutes = require("./flight-details");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Welcome to the development api-server. Pick your route.");
  });
 
  flightRoutes(app, fs);
};

module.exports = appRouter;
