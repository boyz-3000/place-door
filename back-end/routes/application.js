const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Application = require('../models/application');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/get-applied-students', async (req, res) => {
  const { username } = req.body;
  try {
    const result = await Application.aggregate([
      {
        $match: { "companyUsername": username }
      },
      {
        $lookup: {
          from: 'students',
          localField: 'studentUsername',
          foreignField: 'username',
          as: 'students'
        }
      },
      {
        $unwind: "$students",
      },
      {
        $project: {
          studentName: "$students.studentName",
          emailID: "$students.emailID",
          rollNo: "$students.rollNo",
          jobRole: 1,
          phoneNo: "$students.phoneNo",
          department: "$students.department",
          stream: "$students.stream",
          cgpa: "$students.cgpa",
        }
      }
    ]);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

app.get('/get-company-applications', async (req, res) => {

  try {

  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.get('/get-applications', async (req, res) => {
  try {
    const result = await Application.aggregate([
      {
        $lookup: {
          from: 'students',
          localField: 'studentUsername',
          foreignField: 'username',
          as: 'students'
        }
      },
      {
        $lookup: {
          from: 'companies',
          localField: 'companyUsername',
          foreignField: 'username',
          as: 'companies'
        }
      },
      {
        $unwind: "$students",
      },
      {
        $unwind: "$companies",
      },
      {
        $project: {
          studentName: "$students.studentName",
          studentEmail: "$students.emailID",
          rollNo: "$students.rollNo",
          jobRole: 1,
          companyName: "$companies.companyName",
          companyEmail: "$companies.emailID",
        }
      }
    ]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/apply-job', async (req, res) => {
  const { studentUsername, companyUsername, jobRole } = req.body;
  let application = await Application.findOne({ studentUsername, companyUsername, jobRole });

  if (application) {
    return res.status(201).json({ status: 200, message: "Already applied for this Job!!" });
  }

  try {
    application = new Application({ studentUsername, companyUsername, jobRole });
    await application.save();
    res.status(201).json({ status: 201, message: "Application for Job submitted" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;