// routes/students.js
const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const Course = require("../models/course"); 


//Route to add new student
router.post("/addStudent", async (req,res)=> {
    console.log('Received request:', req.method, req.url, req.body);
    try{
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch(error) {
        res.status(500).json({error:error.message})
    }
});

// Route to get a single student by ID for modification
// router.get('/getStudent/:id', async (req, res) => {
//   try {
//     const student = await Student.findOne({ id: req.params.id });
//     if (!student) {
//       return res.status(404).json({ error: 'Student not found' });
//     }
//     res.json(student);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get('/getStudent/:id', async (req, res) => {
  try {
    const student = await Student.findOne({ id: req.params.id });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Simplify the course information to an array of course names
    const courses = await Course.find({ _id: { $in: student.courses } });
    const simplifiedCourses = courses.map(course => course.name);

    // Send the modified response
    res.json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      id: student.id,
      semester: student.semester,
      courses: simplifiedCourses,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Route to delete a student by the id
router.delete('/removeStudent/:id', async (req, res) => {
    try {
      const removedStudent = await Student.findOneAndDelete({ id: req.params.id });
      if (!removedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json({ message: 'Student removed successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

//Route to modify student information by id
router.put("/modifyStudent/:id", async (req, res) => {
    try {
      const modifiedStudent = await Student.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
  
      if (!modifiedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      res.json(modifiedStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  



module.exports = router