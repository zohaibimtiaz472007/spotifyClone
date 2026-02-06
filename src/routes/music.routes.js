const express = require("express")
const { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById } = require("../controller/music.controller")
const multer = require("multer")
const { authArtist, authUser } = require("../middleware/auth.middleware")




const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()



router.post("/upload", authArtist, upload.single("music"), createMusic)
router.post("/album", authArtist, createAlbum)
router.get("/", authUser, getAllMusic)
router.get("/album", authUser, getAllAlbum)
router.get("/albumId/:id", authUser, getAlbumById)





module.exports = router