const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        jobProfile: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        package: {
            type: String,
            required: true,
        },
        reqCGPA: {
            type: String,
            required: true,
        },
        ldta: {
            type: String,
            required: true,
        }
    }
)

const Job = mongoose.model('Job', userSchema);

module.exports = Job;

// name,
// email,
// job_profile
// lastDate
// mode
// city
// address
// package
// reqCGPA
// // tectStack
// ldta