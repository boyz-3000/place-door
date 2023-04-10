const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        jobRole: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            required: true,
        },
        lastDate: {
            type: Date,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        skillsReq: {
            type: Array,
            required: true,
        },
        stipend: {
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
    }
)

const Job = mongoose.model('Job', jobSchema);

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