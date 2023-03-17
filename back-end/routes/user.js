const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.send("worked")
    bcrypt.hash(req.body.password, 10).then(
        hash => {
            const user = new User({
                username: req.body.username,
                password: hash,
            });

            user.save().then(
                result => {
                    res.status(201).json({
                        message: 'User created!'
                    });
                }
            ).catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        }
    );
});

module.exports = router;