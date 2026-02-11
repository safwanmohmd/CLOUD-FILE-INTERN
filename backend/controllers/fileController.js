import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";
import fileModel from "../models/fileModel.js";

export const fileUpload = async (req,res)=>{
    try {
        if (!req.file) {
            return res.json("must include a file")
        }
        const resp = await cloudinary.uploader.upload(req.file.path,{
            resource_type:"auto"
        })

        const  createFile = await fileModel.create({
            fileUrl:resp.secure_url,
            public_id:resp.public_id
        })
        res.json(createFile)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}