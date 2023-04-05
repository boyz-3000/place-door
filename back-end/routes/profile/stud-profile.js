const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Student = require('../../models/profile/stud-profile');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/update-student', async (req, res) => {
  // res.setHeader('Content-Type', 'text/plain');
  const { userName, firstName, lastName, email, phone, rollNo, department } = req.body;

  try {

    let student = await Student.findOne(
      { email }
    );

    if (!student) {
      student = new Student({
        userName, firstName, lastName, email, phone, rollNo, department
      });
      await student.save();
      res.status(201).json({ status: 201, message: "New Student Added Successfully!!" });
    } else {
      student.firstName = firstName;
      student.lastName = lastName;
      student.email = email;
      student.phone = phone;
      student.rollNo = rollNo;
      student.department = department;
      await student.save();
      res.status(201).json({ status: 201, message: "Student details updated!!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

app.get('/get-student', async (req, res) => {
  // res.setHeader('Content-Type', 'text/plain');
  const { userName, firstName, lastName, email, phone, rollNo, department } = req.body;

  try {

    const student = await Student.findOne({ userName });

    if (!student) {
      res.status(401).json({ status: 401, message: "Student Profile doesn't exists!!" });
    } else {
      res.status(201).json({ status: 201, message: "Student Profile exists!!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = app;