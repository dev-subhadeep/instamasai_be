const mongoose = require("mongoose")
const PostModel = require("../../models/post.model")

const updatePost = async (req, res) => {
  const { _id } = req.params
  const { userID } = req.body
  const post = await PostModel.findOne({ _id })
  if (post.userID === userID) {
    const post = await PostModel.findByIdAndUpdate({ _id }, req.body)
    res.status(200).send({ message: "Post updated successfully", post: post })
  } else {
    res.status(200).send({ message: "You are not authorized." })
  }
}

module.exports = updatePost
