const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Companies = require('../models/companies');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/get-company:username', async (req, res) => {
    const username = req.params.username;
    try {
        const company = await Companies.findOne({username});
        res.status(201).json({ status: 201, message: company });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.post('/add-company:username', async (req, res) => {
    const { jobRole, mode, lastDate, state, city, skillsReq, stipend, ctc } = req.body;
    const username = req.params.username;
    try {
        const company = Companies({  })
        await company.save();
        res.status(201).json({ status: 201, message: company });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

module.exports = app;