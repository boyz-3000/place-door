const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const PostJob = require('../models/postJob');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/post-job', async (req, res) => {
    const { jobRole, mode, lastDate, state, city, skillsReq, stipend, ctc } = req.body;

    // const existingJob = await PostJobs.findOne({ jobRole, mode });

    // if (existingJob) {
    //     return res.json({ status: 400, message: "Job is already posted!!" });
    // }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const job = PostJob({ jobRole, mode, lastDate, state, city, skillsReq, stipend, ctc });

    try {
        await job.save();
        res.status(201).json({ status: 201, message: "Job successfully posted!!" });
    } catch(error) {
        console.error(error);
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
});

module.exports = app;