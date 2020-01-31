const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exersizes: [{
        type: {
            type: String,
            enum: ["resistance", "stretch", "endurance"],
            description: "can only be one of the enum values and is required"
        },
        name: {
            type: String,
            description: "must be a string and is required"
        },
        duration: {
            type: Number,
            minimum: 1,
            description: "must be an integer greater than 0 and is required"
        },
        weight: {
            type: Number,
            minimum: 1,
            description: "must be an integer greater than 0 and is required"
        },
        reps: {
            type: Number,
            minimum: 1,
            description: "must be an integer greater than 0 and is required"
        },
        sets: {
            type: Number,
            minimum: 1,
            description: "must be an integer greater than 0 and is required"
        }
    }],
    day: {
        type: Date,
        default: Date.now
    }
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

// const workoutSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for this workout"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });
