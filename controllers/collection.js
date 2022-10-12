import mongoose from "mongoose";
import collections from "../models/collections.js";
import posts from "../models/posts.js";

//fetching collections
export const fetchCollections =  async(req,res)=>{
    try {
        const data = await collections.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
} 


//inserting collection
export const insertCollection = async(req,res)=>{
try {
    const newCollection = collections({
        name : req.body.name
    })
    await newCollection.save()
    res.send("ok")
} catch (error) {
    res.send("err")
}
}


//fetch posts by collection
export const viewByCategory = async(req,res)=>{
    try {
        const fposts = await posts.find({category : req.params.collectionName})
        res.json(fposts)
    } catch (error) {
        res.send(error)
    }
}

// delete collections
export const deleteCollections = async(req,res)=>{
    try {
        await collections.findOneAndDelete({name : req.params.title })
        res.send("ok")
    } catch (error) {
        res.send("err")
    }
}


// update a collection
export const updateCollection = async(req,res)=>{
    try {
        await collections.findOneAndUpdate({name : req.params.title },{name: req.body.name})
        res.send("ok")
    } catch (error) {
        res.send("err")
    }
}