const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
const userRoutes = require('././routes/user');
const jobRoutes = require('./routes/jobs');
// const studentRoutes = require('./routes/student-details');
// const postJob = require('./routes/postJob');
const student = require('./routes/profile/stud-profile');
const company = require('./routes/company');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

PORT = process.env.PORT

connectDB();

app.get('/', (req, res) => {
    res.send("API is running...")
});

app.use('/', userRoutes);
app.use('/', jobRoutes);
// app.use('/', studentRoutes);
// app.use('/', postJob);
app.use('/', student);
app.use('/', company);

app.listen(PORT, console.log(`Server started at ${PORT}`));