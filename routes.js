var Places = require("./models/place.model.js");

module.exports = app => {
  app.get("/api/gymnasium", (req, res) => {
    const { level, activity, department, city } = req.query;
    const filters = Object.entries({
      Niveau: level,
      Activité: activity,
      Département: department,
      ComLib: city
    }).reduce((acc, key) => {
      if (key[1]) {
        return { ...acc, [key[0]]: key[1] };
      }

      return acc;
    }, {});

    if (!filters) {
      res.send({ error: "Vas te faire enculer" });
      return;
    }

    console.log(filters);

    Places.find(filters).then(data => {
      res.send(data);
    });
  });

  app.post("/api/gymnasium", (req, res) => {
    Places.create(req.body)
      .then(data => {
        res.send(200);
      })
      .catch(e => {
        res.send(e);
      });
  });

  app.get("/api/activities", (req, res) => {
    Places.distinct("Activité").then(data => {
      res.send(data);
    });
  });

  app.get("/api/departments", (req, res) => {
    Places.distinct("Département").then(data => {
      res.send(data);
    });
  });

  app.get("/api/city", (req, res) => {
    Places.distinct("ComLib").then(data => {
      res.send(data);
    });
  });

  app.get("/api/level", (req, res) => {
    Places.distinct("Niveau").then(data => {
      const filteredData = data.filter(d => d !== "");
      res.send(filteredData);
    });
  });
};
