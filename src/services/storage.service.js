const imageKit = require("@imagekit/nodejs")
require("dotenv").config()


const client = new imageKit({
    privateKey: process.env.IMAGE_KIT
})

async function uploadFile(file) {
    const result = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "yt_backend/music"
    })

    return result;
}

module.exports = { uploadFile }