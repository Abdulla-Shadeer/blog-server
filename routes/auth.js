import Express  from "express";
import mongoose from "mongoose";
import user from '../models/users.js'
import auth,{userRegister} from '../controllers/auth.js'

const router = Express.Router()

router.post("/login",auth)
router.post("/register",userRegister)

export default router

