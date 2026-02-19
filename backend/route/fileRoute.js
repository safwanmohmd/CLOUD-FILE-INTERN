import express from "express"
import multer from "multer"
import { deleteFile, fileUpload, getFiles } from "../controllers/fileController.js"
const router = express.Router()
const upload = multer({dest:"uploads/"})

router.post("/upload",upload.single("file"), fileUpload)
router.get("/files",getFiles)
router.delete("/:id",deleteFile)
export default router