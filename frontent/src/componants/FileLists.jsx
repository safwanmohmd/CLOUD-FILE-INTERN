import React from "react";
import { deleteFile, getFiles } from "../features/fileSlice";
import { useDispatch } from "react-redux";

const FileLists = ({ files }) => {
  const dispatch = useDispatch();

  const name = files?.fileName || "";

  const fileTypes = [
    ".jpg", ".jpeg", ".png", ".webp",
    ".gif", ".bmp", ".svg",
    ".mp4", ".mov", ".avi", ".mkv", ".webm",
  ];

  const filetype = name.slice(name.lastIndexOf("."));
  const isCanView = fileTypes.includes(filetype);

  // 📅 Handle uploaded date
  const uploadedDate = files?.uploadedAt || files?.createdAt;

  const formattedDate = uploadedDate
    ? new Date(uploadedDate).toLocaleDateString() +
      " • " +
      new Date(uploadedDate).toLocaleTimeString()
    : "";

  const handleDelete = async (id) => {
    await dispatch(deleteFile(id));
    dispatch(getFiles());
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(files.fileUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = files.fileName;
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const shortName =
    name.length > 20
      ? name.slice(0, name.lastIndexOf(".")).slice(0, 15) +
        "..." +
        name.slice(name.lastIndexOf("."))
      : name;

  return (
    <div className="border border-gray-50/10 min-h-[60px] flex items-center justify-between p-4">
      
      {/* File Info Section */}
      <div className="flex items-center gap-3">
        <i className="text-3xl text-white bi bi-file-earmark-binary"></i>

        <div className="flex flex-col">
          <span className="text-white text-lg">{shortName}</span>
          <span className="text-gray-400 text-xs">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">

        {/* Delete */}
        <button
          onClick={() => handleDelete(files._id)}
          className="flex items-center justify-center 
                     w-10 h-10 
                     border-2 border-red-500 
                     text-red-500 text-xl 
                     rounded-lg
                     transition-all duration-200
                     hover:bg-red-500 hover:text-white
                     hover:scale-110 active:scale-95"
        >
          <i className="bi bi-trash3"></i>
        </button>

        {/* View */}
        <button
          disabled={!isCanView}
          onClick={() => window.open(files.fileUrl, "_blank")}
          className="flex items-center justify-center 
                     w-10 h-10 
                     border-2 border-blue-500 
                     text-blue-500 text-xl 
                     rounded-lg
                     transition-all duration-200
                     hover:bg-blue-500 hover:text-white
                     hover:scale-110 active:scale-95
                     disabled:border-gray-400
                     disabled:text-gray-400
                     disabled:bg-transparent
                     disabled:cursor-not-allowed
                     disabled:hover:scale-100
                     disabled:hover:bg-transparent
                     disabled:hover:text-gray-400"
        >
          <i className="bi bi-eye-fill"></i>
        </button>

        {/* Download */}
        <button
          onClick={handleDownload}
          className="flex items-center justify-center 
                     w-10 h-10 
                     border-2 border-blue-500 
                     text-blue-500 text-xl 
                     rounded-lg
                     transition-all duration-200
                     hover:bg-blue-500 hover:text-white 
                     hover:scale-110 active:scale-95"
        >
          <i className="bi bi-box-arrow-down"></i>
        </button>

      </div>
    </div>
  );
};

export default FileLists;
