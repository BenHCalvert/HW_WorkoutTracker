const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excPlan = new Schema({
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["type", "name", "duration", "weight", "reps", "sets"],
            properties: {
                type: {
                    enum: ["resistance", "stretch", "endurance"],
                    description: "can only be one of the enum values and is required"
                },
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                duration: {
                    bsonType: "int",
                    minimum: 1,
                    description: "must be an integer greater than 0 and is required"
                },
                weight: {
                    bsonType: "int",
                    minimum: 1,
                    description: "must be an integer greater than 0 and is required"
                },
                reps: {
                    bsonType: "int",
                    minimum: 1,
                    description: "must be an integer greater than 0 and is required"
                },
                sets: {
                    bsonType: "int",
                    minimum: 1,
                    description: "must be an integer greater than 0 and is required"
                }
            }
        }
    }
});

const ExcPlan = mongoose.model("Workout", excPlan);

module.exports = Workout;