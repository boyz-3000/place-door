const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
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
        rollNo: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
    }
)

const Student = mongoose.model('students', userSchema);

module.exports = Student;