import Express from "express";
import { fetchCollections, insertCollection, viewByCategory, deleteCollections, updateCollection } from "../controllers/collection.js";
import {isAdmin} from '../controllers/auth.js'

const router = Express.Router()

router.post("/",isAdmin,insertCollection)
router.get("/",fetchCollections)
router.delete("/:title",isAdmin,deleteCollections)
router.get("/:collectionName",viewByCategory)
router.put("/:title",isAdmin, updateCollection)

export default router