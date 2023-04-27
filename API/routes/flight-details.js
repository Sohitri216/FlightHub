const { randomUUID } = require("crypto");

const flightDetailsRoute = (app, fs) => {
  const dataPath = "./data/flight-details.json";

  app.get("/promotions/priceoffers/flights/ond/:origin/:dest", (_req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      let flightData = JSON.parse(data);
      flightData.flightDetails.forEach((each) => (each.uuid = randomUUID()));
      res.setHeader("Content-Type", "application/json");
      res.send(flightData);
    });
  });
};

module.exports = flightDetailsRoute;
