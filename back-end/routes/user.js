const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const app = express();
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    // res.send("worked")
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(400).json({ error: "Email is already registered" });
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

    // bcrypt.hash(req.body.password, 10).then(
    //     hash => {
    //         const user = new User({
    //             username: req.body.username,
    //             password: hash,
    //         });
    //         // res.send("1worked")
    //         user.save().then(
    //             result => {
    //                 res.status(201).json({
    //                     message: 'User created!'
    //                 });
    //             }
    //         ).catch(err => {
    //             res.status(500).json({
    //                 error: err
    //             });
    //         });
    //     }
    // );
});

module.exports = app;