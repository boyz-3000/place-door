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
          jobRole: 1,
          ctc: 1,
          stipend: 1,
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

  const { username, jobRole, mode, lastDate, city, state, skillsReq, stipend, package, reqCGPA } = req.body;
  // const { jobRole, mode, lastDate, state, city, skillsReq, stipend, ctc } = req.body;
  // const job = await Jobs.findOne({
  //   company, jobRole
  // });
  let job = await Jobs.find({ username, jobRole });
  // console.log(typeof job);
  // if (job) {
  //   return res.json({ status: 400, message: `Job Role already posted!! ${job}` });
  // }

  try {
    job = new Job({ username, jobRole, mode, lastDate, city, state, skillsReq, stipend, package, reqCGPA });
    await job.save();
    res.status(201).json({ status: 201, message: "Job Posted successfully!!" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;