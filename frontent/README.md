Frontend Explanation – Photo & Video Upload App

The frontend of this project is built using React and packaged as a
desktop executable (.exe) application using CEF/Electron.

It provides the user interface and communicates with the backend API to
manage photo and video files.

------------------------------------------------------------------------

Core Responsibilities:

1)  File Upload Users can select files from their system. The
    selected file is sent to the backend using an API request. Frontend
    validation ensures:

-   File size limits are enforced

2)  File Listing The frontend fetches all uploaded files from the
    backend and displays them in a structured list format.

Each file entry shows: - File name - Uploaded date and time - Action
buttons (View, Download, Delete)

3)  View Files Users can open supported images and videos in a new
    window using the file URL provided by the backend.

4)  Download Files The frontend forces file download using fetch and
    blob handling, ensuring files download instead of navigating to the
    URL.

5)  Delete Files Users can delete files directly from the interface. The
    frontend sends a delete request to the backend and refreshes the
    file list automatically.

6)  Desktop Application The React application is packaged as a
    standalone executable file. This allows the application to run
    independently without a browser.

------------------------------------------------------------------------

Summary: The frontend provides a functional desktop interface for
uploading, viewing, downloading, and deleting media files. It
communicates with the backend server and ensures proper validation and
user interaction within a desktop environment.
