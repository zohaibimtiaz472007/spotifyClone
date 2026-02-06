const mongoose = require("mongoose")


const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    album: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "music"
        }
    ],
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const albumModel = mongoose.model("album", albumSchema)

module.exports = albumModel