url : https://cloud-file-intern.onrender.com
Backend Explanation – Photo & Video Upload App

The backend of this project is built using Express.js and MongoDB. It is
responsible for handling file uploads, storing file information, and
managing all file-related operations.

------------------------------------------------------------------------

Core Responsibilities:

1)  File Upload Handling The backend accepts photo and video files using
    Multer middleware. It performs file size validation and file type
    validation. After upload, files are stored in the /uploads folder
    and file metadata is saved in MongoDB.

2)  Database Storage Each uploaded file is stored with:

-   fileName
-   fileUrl
-   public_id
-   uploadedAt


3)  Retrieve Files Provides an API to fetch all uploaded files and
    return metadata in JSON format for the frontend to display.

4)  File Viewing Files are served statically from the uploads folder,
    allowing the frontend to open images, play videos, and download
    files.

5)  Delete Functionality Supports deleting files by removing them from
    both:

-   The uploads folder
-   The MongoDB database

6)  CORS Configuration CORS is configured to allow requests from a
    desktop .exe application using file:// origin.

7)  Deployment The backend is deployed online and publicly accessible,
    allowing the desktop frontend application to communicate with it.

------------------------------------------------------------------------

Summary: The backend handles uploads, stores metadata, serves
files, allows retrieval and deletion, and supports a desktop-based
frontend application.
