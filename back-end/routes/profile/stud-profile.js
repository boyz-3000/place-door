const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Student = require('../models/profile/stud-profile');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.put('/update-student', async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
          { email: req.params.email },
          req.body,
          { new: true }
        );
        if (!student) {
          res.status(404).json({ message: "Student not found." });
        }
        res.json(student);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
      }
  });

module.exports = app;