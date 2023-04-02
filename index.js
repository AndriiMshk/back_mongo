import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 6000

const DB_URL = 'mongodb+srv://andr:andrey031444@cluster.4l8v2r8.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/', router)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log('server ready')
    })
  } catch (err) {
    console.log(err)
  }
}
startApp()


