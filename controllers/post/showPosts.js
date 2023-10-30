const mongoose = require("mongoose")
const PostModel = require("../../models/post.model")

const showPosts = async (req, res) => {
  const { userID } = req.body
  const { page } = req.query
  const skip = page ? (+page - 1) * 3 : 0
  try {
    const posts = await PostModel.find({ userID }).skip(skip).limit(3)
    if (posts.length) {
      res.status(200).send({ message: "Success", posts })
    } else {
      res.status(200).send({ message: "No post found" })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = showPosts
