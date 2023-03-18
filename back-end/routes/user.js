const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const app = express();
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(400).json({ error: "username is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = User({ username, password: hashedPassword });

    try {
        await user.save();
        res.status(201).json({ message: "User registered successfully!!" });
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = app;