import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'
import dotenv from "dotenv";


const app = express()
dotenv.config()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/', router)

const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.PORT || 5000, () => {
      console.log('server ready')
    })
  } catch (err) {
    console.log(err)
  }
}
startApp()


