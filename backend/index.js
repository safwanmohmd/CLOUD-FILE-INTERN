import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import dotenv from 'dotenv'
import fileroutes from "./route/fileRoute.js"
dotenv.config()
const app = express()

try {
    mongoose.connect(process.env.mongoUri).then(
        console.log("connected to db")
    ).then(
        app.listen(process.env.PORT,()=>{
            console.log(`server started on ${process.env.PORT}`)
        })
    )
} catch (error) {
    console.log(error.message)
}


app.use(express.json())
app.use("/api",fileroutes)