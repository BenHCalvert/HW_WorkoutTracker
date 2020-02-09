const router = require("express").Router();
const Workout = require("../models/workoutTracker.js");
const path = require("path");

// API ROUTES **********************
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
			.then(data => res.json(data))
			.catch(err => {
				console.log("err", err)
				res.json(err)
			})
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne({_id:req.params.id}, {$push:req.body})    
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });    
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.json(results);
    }
  });
});

// HTML ROUTES **********************
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

router.get('/exercise/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});


module.exports = router;
