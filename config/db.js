const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true
        })
        console.log('MongoDB connected successfully!')
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;