const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
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
        state: {
            type: String,
            required: true,
        },
        city: {
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
        ctc: {
            type: String,
            required: true,
        }
    }
)

const postJob = mongoose.model('postJob', userSchema);

module.exports = postJob;