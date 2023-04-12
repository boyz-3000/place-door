const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        username: {
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