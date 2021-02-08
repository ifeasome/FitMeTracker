const db = require("../models/exerciseModel");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    // find last workout
    db.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    // add exercise in db based on id
    console.log(req.body);
    db.findByIdAndUpdate(
      req.params.id,
      { ExerciseType: req.body.ExerciseType },
      { new: true, runValidators: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    // create workout
    console.log(req.body);
    db.create({

    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    // find action for workout range
    db.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
