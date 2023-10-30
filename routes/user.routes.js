const express = require("express")
const createUser = require("../controllers/user/createUser")
const loginUser = require("../controllers/user/loginUser")
const userRouter = express.Router()

userRouter.post("/register", createUser)
userRouter.post("/login", loginUser)

module.exports = userRouter
