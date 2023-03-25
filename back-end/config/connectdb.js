const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;