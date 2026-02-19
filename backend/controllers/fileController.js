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
            fileName: req.file.originalname,
            fileUrl:resp.secure_url,
            public_id:resp.public_id
        })
        res.json(createFile)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getFiles = async (req,res)=>{
    try {
        const getfiles = await fileModel.find({})
       res.json({message : "files fetched successfully" , allFiles:getfiles})
    } catch (error) {
        res.json(error.message)
    }
}


export const deleteFile = async (req,res)=>{
    try {
        const {id} = req.params
        const findFile = await fileModel.findById(id)

        if(!findFile){
            return res.json({message : "no file found with that id"})
        }
        
        await fileModel.findByIdAndDelete(id)
        res.json({message:"deleted file successfully"})
    } catch (error) {
        
    }
}