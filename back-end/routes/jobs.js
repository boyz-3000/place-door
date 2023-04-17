const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Jobs = require('../models/jobs');
const cors = require('cors');
const Job = require('../models/jobs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/get-jobs", async (req, res) => {
  try {
    const jobs = await Job.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "username",
          foreignField: "username",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
      {
        $project: {
          _id: 0,
          companyName: "$company.companyName",
          emailID: "$company.emailID",
          state: "$company.state",
          city: "$company.city",
          contactNo: "$company.contactNo",
          username: 1,
          jobRole: 1,
          mode: 1,
          lastDate: 1,
          skillsReq: 1,
          stipend: 1,
          _package: 1,
          reqCGPA: 1,
        },
      },
    ]);
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post('/post-job', async (req, res) => {

  const { username, jobRole, mode, lastDate, skillsReq, stipend, _package, reqCGPA } = req.body;
  let job = await Jobs.findOne({ username, jobRole });
  if(job) {
    return res.status(201).json({status: 200, message: "Job Already Exists!!"});
  }
  try {
    job = new Job({ username, jobRole, mode, lastDate, skillsReq, stipend, _package, reqCGPA });
    await job.save();
    res.status(201).json({ status: 201, message: `skills: ${skillsReq}` }); //"Job Posted successfully!!"
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;