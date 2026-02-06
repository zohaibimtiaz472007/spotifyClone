const mongoose = require("mongoose")
require("dotenv").config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    } catch (err) {
        console.log("error", err)
    }
}

module.exports = connectDB