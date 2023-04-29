const { randomUUID } = require("crypto");

const flightDetailsRoute = (app, fs) => {
  const dataPath = "./data/flight-details.json";

  app.get("/promotions/priceoffers/flights/ond/:origin/:dest", (_req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      let { flightDetails } = JSON.parse(data);
      flightDetails.forEach((each) => (each.uuid = randomUUID()));
      res.setHeader("Content-Type", "application/json");
      res.send(flightDetails);
    });
  });
};

module.exports = flightDetailsRoute;
