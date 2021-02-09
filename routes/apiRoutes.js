const { Exercise } = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    // find last workout
    Exercise.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    // add exercise inExercise based on id
    console.log(req.body);
    const id = req.params.id;
    const exercise = req.body;
    Exercise.findByIdAndUpdate(
      id,
      { $push: {exercises: exercise } },
      { new: true }
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
    const body = req.body;
    Exercise.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    // find action for workout range
    Exercise.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
