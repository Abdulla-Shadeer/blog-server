import mongoose from "mongoose";
import Express from "express";
import posts from "../models/posts.js";
import form from 'formidable'

const router = Express.Router()

//fetching all posts
export const getPosts = async (req, res) => {
    try {
        const fetchedPosts = await posts.find()
        res.json(fetchedPosts)

    } catch (error) {
        res.send(error)
    }
}

//fetching single post
export const getPost = async (req, res) => {
    try {
        const fetchedPost = await posts.findOne({ title: req.params.title })
        if (fetchedPost === null) {
            res.send("sorry no posts found")
        } else {
            res.send(fetchedPost)
        }
    } catch (error) {
        console.log(error)
    }
}


//creating new post document status = ok
export const createPost = (req, res) => {
    const formData = new form.IncomingForm()
    formData.parse(req, async (err, fields, files) => {
        if(err){
            res.send("err")
        }
        try {
            const newPost = new posts({
                title: fields.title,
                author: "admin",
                date: new Date().toString().slice(0,15),
                preview: fields.desc,
                content: fields.post,
                image: fields.image,
                category: fields.category
            })
            await newPost.save()
            res.send("ok")
        } catch (error) {
            res.send("err")
        }

    })


}



//update posts status = ok
export const updatePost = async (req, res) => {

    const formData = new form.IncomingForm()
    formData.parse(req,async(err,fields,files)=>{
        if(err){
            res.send("err")
        }
        try {
            const updatedPost = await posts.findOneAndUpdate(
                { title: req.params.title },
                {title: fields.title,
                    author: "admin",
                    date: new Date().toString().slice(0,15),
                    preview: fields.desc,
                    content: fields.post,
                    image: fields.image,
                    category: fields.category},
                { new: true })
    
            //response
            if (updatedPost === null) {
                res.send("np")
            } else {
                res.send("ok")
            }
            
        } catch (error) {
            res.send("err")
        }
    })
    
}


//delete posts status = ok
export const deletePost = async (req, res) => {
    try {
        await posts.findOneAndDelete({ _id: req.params.title })
            res.send("ok")

    } catch (error) {
        res.send("err")
    }
}


//fetch recent posts (for footer component) (limit => 3)
export const fetchRecent = async(req,res)=>{
    try {
        const result = await posts.find({},{},{limit:5})
        
        res.send(result)
    } catch (error) {
        res.send("err")
    }
}