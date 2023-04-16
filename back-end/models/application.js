const mongoose = require('mongoose');

const appliedJobSchema = new mongoose.Schema(
    {
        studentUsername: {
            type: String,
            required: true,
        },
        companyUsername: {
            type: String,
            required: true,
        },
        jobRole: {
            type: String,
            required: true,
        },
    }
)

const application = mongoose.model('applications', appliedJobSchema);

module.exports = application;