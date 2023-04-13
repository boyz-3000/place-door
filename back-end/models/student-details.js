const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        studentName: {
            type: String,
            required: true,
        },
        emailID: {
            type: String,
            required: true,
        },
        phoneNo: {
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

const Student = mongoose.model('students', studentSchema);

module.exports = Student;