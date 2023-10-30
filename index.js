const express = require("express")
const { default: connection } = require("./utils/connection")
const userRouter = require("./routes/user.routes")
const app = express()
require("dotenv").config()
const cors = require("cors")
const postRoute = require("./routes/post.routes")
const logoutUser = require("./controllers/user/logoutUser")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "This is the homepage" })
})

app.use("/users", userRouter)
app.use("/posts", postRoute)
app.get("/logout", logoutUser)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB Connected")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
