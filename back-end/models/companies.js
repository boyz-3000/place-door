const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        emailID: {
            type: String,
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
        contactNo: {
            type: Array,
            required: true,
        },
    }
)

const company = mongoose.model('companies', companySchema);

module.exports = company;