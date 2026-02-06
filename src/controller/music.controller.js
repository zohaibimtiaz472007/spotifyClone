const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken")
const { uploadFile } = require("../services/storage.service")
require("dotenv").config()


async function createMusic(req, res) {

    const { title } = req.body;
    const file = req.file

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({ msg: "music created", music })




}

async function createAlbum(req, res) {

    const { title, musics } = req.body
    const album = await albumModel.create({
        title: title,
        artist: req.user.id,
        album: musics
    })
    res.status(201).json({
        msg: "Album Created Successfully",
        album
    })

}

async function getAllMusic(req, res) {
    const music = await musicModel.find().populate("artist", "userName email")
    res.status(200).json({
        msg: "Music Fetched successfully",
        music
    })
}

async function getAllAlbum(req, res) {
    const album = await albumModel.find().populate("artist", "UserName email").populate("album")
    res.status(200).json({
        msg: "Album Fetched Sucessfully",
        album
    })
}

async function getAlbumById(req, res) {
    const id = req.params.id
    const album = await albumModel.findById(id).populate("artist", "userName email").populate("album")
    res.status(200).json({
        msg: "Album Fetched",
        album
    })
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById }