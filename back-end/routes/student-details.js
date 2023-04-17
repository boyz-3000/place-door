const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Student = require('../models/student-details')
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/student-details', async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/get-student', async (req, res) => {
  const username = req.query.username;
  try {
    const student = await Student.findOne({ username });
    res.status(201).json({ status: 201, message: student });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.post('/delete-student', async (req, res) => {
  const { emailID } = req.body;

  // Validate request body
  if (!emailID) {
    return res.status(400).json({ message: 'EmailID is required' });
  }

  try {
    // Delete student document
    const result = await Student.deleteOne({ emailID });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the student' });
  }
});

app.post('/update-student', async (req, res) => {
  // let username = req.query.username;
  const { username, studentName, emailID, phoneNo, rollNo, department, stream, cgpa } = req.body;
  let student = await Student.findOne(
    { username }
  );
  try {
    if (!student) {
      student = new Student({
        username, studentName, emailID, phoneNo, rollNo, department, stream, cgpa
      });
      await student.save();
      res.status(201).json({ status: 201, message: "student Added Successfully!!" });
    } else {
      student.username = username;
      student.studentName = studentName;
      student.emailID = emailID;
      student.phoneNo = phoneNo;
      student.rollNo = rollNo;
      student.department = department;
      student.stream = stream;
      student.cgpa = cgpa;
      await student.save();
      res.status(201).json({ status: 201, message: "Student details updated!!" });
    }
  } catch (error) {
    res.status(500).send(student);
  }
});

module.exports = app;