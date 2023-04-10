const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Company = require('../models/company');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/get-company', async (req, res) => {
    const username = req.query.username;
    try {
        const company = await Company.findOne({ username });
        res.status(201).json({ status: 201, message: company });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.post('/add-company', async (req, res) => {
    const { username, companyName, emailID, state, city, contactNo } = req.body;

    try {

        let company = await Company.findOne(
            { username }
        );

        if (!company) {
            company = new Company({
                username, companyName, emailID, state, city, contactNo
            });
            await company.save();
            res.status(201).json({ status: 201, message: "Company Added Successfully!!" });
        } else {
            company.username = username;
            company.companyName = companyName;
            company.emailID = emailID;
            company.state = state;
            company.city = city;
            company.contactNo = contactNo;
            await company.save();
            res.status(201).json({ status: 201, message: "Company details updated!!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = app;