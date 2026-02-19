 """
Photo & Video Upload App – Backend

Backend server for the MERN Hackathon project.
Built using Node.js, Express, and MongoDB.

------------------------------------------------------------

Live Backend URL:
https://your-backend-name.onrender.com

(Replace with your actual Render URL)

------------------------------------------------------------

Tech Stack:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)

------------------------------------------------------------

Features:

- Upload photos & videos
- Retrieve all uploaded files
- View individual file
- Delete files
- File size validation
- File type validation
- CORS enabled for desktop (.exe) app
- Hosted backend

------------------------------------------------------------

API Endpoints:

1) Upload File
POST /api/files/upload
Form Data:
Key: file
Type: File

2) Get All Files
GET /api/files

Example Response:

[
  {
    "_id": "...",
    "fileName": "example.jpg",
    "fileUrl": "...",
    "fileType": "image",
    "fileSize": 245678,
    "uploadedAt": "2026-02-19T06:20:00.000Z"
  }
]

3) Delete File
DELETE /api/files/:id

------------------------------------------------------------

Database Schema:

{
  fileName: String,
  fileUrl: String,
  fileType: String,
  fileSize: Number,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
}

------------------------------------------------------------

Environment Variables:

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Example MongoDB Atlas connection:
mongodb+srv://username:password@cluster.mongodb.net/database

------------------------------------------------------------

Run Locally:

git clone https://github.com/yourusername/yourrepo.git
cd backend
npm install
npm run dev

Server runs at:
http://localhost:5000

------------------------------------------------------------

CORS Configuration:

Since the frontend is packaged as a desktop .exe using CEF/Electron,
CORS is configured as:

app.use(cors({
  origin: true
}));

------------------------------------------------------------

File Storage:

Files are stored in:
/uploads

Served using:
app.use("/uploads", express.static("uploads"));

------------------------------------------------------------

Hackathon Requirement Completion:

✔ Express backend
✔ MongoDB database
✔ File upload functionality
✔ View & retrieve files
✔ Delete files
✔ Backend deployed
✔ CORS enabled for desktop app

------------------------------------------------------------

Author:

Mohammed Safwan
MERN Stack Developer
Calicut University Graduate

------------------------------------------------------------

This project was built as part of a MERN Hackathon challenge to demonstrate full-stack development skills including backend deployment and desktop application integration.
"""