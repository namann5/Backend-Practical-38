const express = require("express");
const router = express.Router();
let students = require("../data/students");

// all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// student find
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// student update
router.post("/", (req, res) => {
  const { name, course, age } = req.body;

  if (!name || !course || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course,
    age
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// student update
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, course, age } = req.body;

  if (!name || !course || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }

  student.name = name;
  student.course = course;
  student.age = age;

  res.status(200).json(student);
});

// student delete
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully" });
});

module.exports = router;