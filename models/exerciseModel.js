const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  ExerciseType: String,
  ExerciseName: String,
  Distance: Number,
  Duration: Number, 
  Weight: Number, 
  Sets: Number, 
  Reps: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;