const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/add-user', async (req, res) => {
    const { username, password, userType } = req.body;

    const existingUser = await User.findOne({ username, userType });

    if (existingUser) {
        return res.json({ status: 400, message: "username is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = User({ username, password: hashedPassword, userType });

    try {
        await user.save();
        res.status(201).json({ status: 201, message: "User registered successfully!!" });
    } catch(error) {
        console.error(error);
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
});

app.get('/signin', async (req, res) => {
    const { username, password } = req.query;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ status: 404, error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({ status: 401, error: 'Incorrect Password' });
    }
    
    res.status(201).json({ status: 201, error: 'User logged In' });

});

module.exports = app;