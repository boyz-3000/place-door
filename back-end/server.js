const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
const userRoutes = require('././routes/user');
const jobRoutes = require('./routes/jobs');
const studentRoutes = require('./routes/student-details');

const app = express();

app.use(express.json());
dotenv.config();

PORT = process.env.PORT

connectDB();

app.get('/', (req, res) => {
    res.send("API is running...")
});

app.use('/', userRoutes);
app.use('/', jobRoutes);
app.use('/', studentRoutes);

app.listen(PORT, console.log(`Server started at ${PORT}`));