const router = require("express").Router();
const Workout = require("../models/workoutTracker.js");
const path = require("path");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// TODO
router.post("/api/workouts", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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

// TODO
router.get("/api/workouts/range", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// API ROUTES **********************

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
