const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Jobs = require('../models/jobs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/get-jobs', async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/post-job', async (req, res) => {

  const { company, email, jobRole, mode, lastDate, city, state, skillsReq, stipend, package, reqCGPA } = req.body;
  // const { jobRole, mode, lastDate, state, city, skillsReq, stipend, ctc } = req.body;
  // const job = await Jobs.findOne({
  //   company, jobRole
  // });
  const job = await Jobs.find({ company, jobRole });

  if (job) {
    return res.json({ status: 400, message: `Job Role already posted!! ${company}` });
  }

  try {
    await job.save();
    res.status(201).json({ status: 201, message: "Job Posted successfully!!" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;