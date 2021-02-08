const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: { type: Date, 
        default: () => new Date()},
  exercises: [
    { type: { type: String }, 
    name: { type: String },
    duration: { type: Number },
    weight: { type: Number },
    reps: { type: Number },
    sets: { type: Number },
    distance: { type: Number },
  }
  ]
}, { toJSON: { virtuals: true}}
);

ExerciseSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

// virtuals are computed properties: a property that calculates and returns a 
// value rather than just store it. 
// total = accumulator 
// exercise = current value 
// exercise schema virtual gives you the total duration of an exercise entered.