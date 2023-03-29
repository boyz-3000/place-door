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
      res.json(student);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

module.exports = app;