import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
    fileUrl:String,
    public_id:String,
    userId:String,
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
})

export default mongoose.model("file",fileSchema)