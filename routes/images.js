import  Express  from "express";
import { postImage } from "../controllers/images.js";

const router = Express.Router()

router.post("/",postImage)

export default router