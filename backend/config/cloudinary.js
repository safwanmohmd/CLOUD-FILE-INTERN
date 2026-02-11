import { v2 as cloudinary } from "cloudinary";
import { configDotenv } from "dotenv";
configDotenv()
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.cloudinary_api_key,
    api_secret:process.env.cloudinary_secret
})

export default cloudinary;