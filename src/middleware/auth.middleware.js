const jwt = require("jsonwebtoken")
require("dotenv").config()


async function authArtist(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== "artist") {
            return res.status(403).json({ msg: "You don't have access" })
        }
        req.user = decoded
        next()
    } catch (error) {
        console.log("error", error)
        return res.status(401).json({ msg: "Unauthorized" })
    }
}

async function authUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "user" && decoded.role !== "artist") {
            return res.status(403).json({ msg: "You don't have access" })
        }

        req.user = decoded
        next()
    } catch (error) {
        console.log("error", error)
        res.status(401).json({ msg: "Unauthorized" })
    }
}

module.exports = { authArtist, authUser }