const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// const User = require('../models/user');
const Jobs = require('../models/jobs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/jobs', async (req, res) => {
    try {
      const jobs = await Jobs.find();
      res.json(jobs);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

module.exports = app;