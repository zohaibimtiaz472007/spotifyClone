const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

require("dotenv").config()



async function registerUser(req, res) {
    const { userName, email, password, role = "user" } = req.body;
    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { userName },
            { email }
        ]
    })
    if (isUserAlreadyExist) {
        return res.status(409).json({
            msg: "User Already Exist"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        userName,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(201).json({
        msg: "User Created",
        user: {
            id: user._id,
            userName: user.userName,
            email: user.email,
            password: user.password,
            role: user.role
        }
    })
}

async function loginUser(req, res) {
    const { userName, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { userName },
            { email }
        ]
    })

    if (!user) {
        return res.status(401).json({ msg: "Invalid Credentials" })
    }

    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword) {
        return res.status(401).json({ msg: "Invalid Credentials" })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        msg: "Login successfull", user: {
            id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role
        }
    })


}

async function logoutUser(req, res) {
    res.clearCookie("token")
    res.status(200).json({ msg: "Logout Successfully" })
}

module.exports = { registerUser, loginUser, logoutUser }