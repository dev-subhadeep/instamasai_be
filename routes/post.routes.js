const express = require("express")
const auth = require("../middlewares/auth.middleware")
const createPost = require("../controllers/post/createPost")
const showPosts = require("../controllers/post/showPosts")
const deletePost = require("../controllers/post/deletePost")
const updatePost = require("../controllers/post/updatePost")
const postRoute = express.Router()

postRoute.use(auth)
postRoute.get("/", showPosts)
postRoute.post("/add", createPost)
postRoute.delete("/delete/:_id", deletePost)
postRoute.patch("/update/:_id", updatePost)

module.exports = postRoute
