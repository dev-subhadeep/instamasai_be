const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserModel = require("../../models/user.model")

const createUser = async (req, res) => {
  const { name, email, gender, password, age, city, is_married } = req.body
  const existingUser = await UserModel.findOne({ email })
  if (existingUser) {
    res.status(200).send({ message: "User already exist, please login" })
  } else {
    bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        res.status(400).send({ error: "There was a problem" })
      }

      if (hash) {
        const newUser = await UserModel.create({
          name,
          email,
          gender,
          password: hash,
          age,
          city,
          is_married,
        })

        res.status(200).send({ message: "User registered successfully." })
      }
    })
  }
}

module.exports = createUser
