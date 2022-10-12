import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : String,
    author : String,
    date : String,
    preview : String,
    content : String,
    image : String,
    category : String
})

export default mongoose.model('posts',postSchema)