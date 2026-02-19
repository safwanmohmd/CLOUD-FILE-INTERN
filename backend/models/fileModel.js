import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    fileName:String,
    fileUrl:String,
    public_id:String,
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
})

export default mongoose.model("file",fileSchema)