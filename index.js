import dotenv from "dotenv"
dotenv.config() 

import Express from "express"
import BodyParser from "body-parser"
import Cors from "cors"
import mongoose, { mongo } from "mongoose"
import cookieParser from "cookie-parser"

//impporting routes
import posts from './routes/posts.js'
import auth from './routes/auth.js'
import collection from "./routes/collection.js"
import images from "./routes/images.js"

const app = Express()

//midlewares
app.use(cookieParser())
app.use(Cors())
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

//configuring routes
app.use("/posts", posts)
app.use("/auth",auth)
app.use("/collections",collection)
app.use("/images",images)


const dbconnection = ()=>{
    try {
        mongoose.connect(process.env.MONGO)
        console.log("mongodb connected")
    } catch (error) {
        throw error
    }
}

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log("blog server started on port ",port)
    dbconnection()
})


