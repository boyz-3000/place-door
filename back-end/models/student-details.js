const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        roll: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        batch: {
            type: String,
            required: true,
        },
        stream: {
            type: String,
            required: true,
        },
        cgpa: {
            type: String,
            required: true,
        }
    }
)

const Student = mongoose.model('Student', userSchema);

module.exports = Student;