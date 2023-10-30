const mongoose = require("mongoose")
const PostModel = require("../../models/post.model")

const createPost = async (req, res) => {
  try {
    const { title, body, device, no_of_comments, name, userID } = req.body
    const post = await PostModel.create({
      title,
      body,
      device,
      name,
      userID,
      no_of_comments,
    })

    res.status(200).send({ message: "Post created successfully", post })
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = createPost
