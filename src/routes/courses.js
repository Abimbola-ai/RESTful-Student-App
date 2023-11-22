// routes/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Route to add a new course
router.post('/addCourse', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to remove a course by ID
router.delete('/removeCourse/:code', async (req, res) => {
    try {
      const removedCourse = await Course.findOneAndDelete({ code: req.params.code });
      if (!removedCourse) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json({ message: 'Course removed successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Route to modify course information by code
router.put('/modifyCourse/:code', async (req, res) => {
    try {
      const modifiedCourse = await Course.findOneAndUpdate(
        { code: req.params.code },
        req.body,
        { new: true }
      );
  
      if (!modifiedCourse) {
        return res.status(404).json({ error: 'Course not found' });
      }
  
      res.json(modifiedCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Route to get all courses
router.get('/getCourses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
