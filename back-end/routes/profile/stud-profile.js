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

  const { firstName, lastName, email, phone, rollNo, department } = req.body;

  try {

    let student = await Student.findOne(
      { email }
    );

    if (!student) {
      student = new Student({
        firstName, lastName, email, phone, rollNo, department
      });
      res.send('New student added');
    } else {
      student.firstName = firstName;
      student.lastName = lastName;
      student.email = email;
      student.phone = phone;
      student.rollNo = rollNo;
      student.department = department;
      res.send('Student details updated');
    }

    await student.save();

    res.send(student);

    // const student = await Student.findOneAndUpdate(
    //   { email: req.params.email },
    //   req.body,
    //   { new: true }
    // );
    // if (!student) {
    //   res.status(404).json({ message: "Student not found." });
    // }
    // res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = app;