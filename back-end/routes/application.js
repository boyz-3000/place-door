const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Application = require('../models/application');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/get-applications', async (req, res) => {
    const { studentUsername, companyUsername, jobRole } = req.body;

});

app.post('/apply-job', async (req, res) => {
    const { studentUsername, companyUsername, jobRole } = req.body;
    let application = await Application.findOne({ studentUsername, companyUsername, jobRole });

    if (application) {
        return res.status(201).json({status: 200, message: "Already applied for this Job!!"});
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