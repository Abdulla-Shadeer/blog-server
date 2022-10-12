import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: String
})

export default mongoose.model('collections',collectionSchema)