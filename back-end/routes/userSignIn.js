const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

PORT = process.env.PORT

const User = require('./user');
const router = express.Router();

const app = express();

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/myapp', {
//     user
// })

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ error: 'User not found'});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!password) {
        return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user_id }, 'secret', { expiresIn: '1h' });

    res.json({ token });
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));