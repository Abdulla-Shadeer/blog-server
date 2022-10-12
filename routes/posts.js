import Express from 'express'
import mongoose from 'mongoose'
import post from '../models/posts.js';
import { getPosts,createPost,updatePost,deletePost,getPost, fetchRecent} from '../controllers/posts.js';
import { isAdmin } from '../controllers/auth.js';

const router = Express.Router();

//fetching all posts from db and return to client
router.get("/",getPosts)

//fetching single post
router.get("/:title",getPost)

//fetching recent posts
router.get("/:recent/:recent",fetchRecent)

//creating new document and inserting into db
router.post("/",isAdmin,createPost)

//creating new document and inserting into db
router.put("/:title",isAdmin,updatePost)

//creating new document and inserting into db
router.delete("/:title",isAdmin,deletePost)

export default router