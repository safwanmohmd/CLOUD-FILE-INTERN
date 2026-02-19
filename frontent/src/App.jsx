import React, { useEffect, useState } from "react";
import FileLists from "./componants/FileLists";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, uploadFile } from "./features/fileSlice";

const App = () => {
  const dispatch = useDispatch();
  const [file, setfile] = useState();

  const { loading, allFiles } = useSelector((state) => state.files);

 const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const handleUpload = async (file) => {
  if (!file) {
    console.log("Please choose a file to upload");
    return;
  }


  if (file.size > MAX_FILE_SIZE) {
    alert("File size must be less than 50MB");
    return;
  }

  await dispatch(uploadFile(file));
  dispatch(getFiles());
};

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center">
      {/* Main Card */}
      <div
        className="h-[75%] w-[95%] md:w-[70%] lg:w-[50%] 
                      bg-white/5 backdrop-blur-xl 
                      border border-white/10 
                      rounded-2xl shadow-2xl 
                      flex flex-col p-6"
      >
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold mb-4 text-center">
          File Manager
        </h1>

        {/* File List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {loading ? (
            <div className="p-5 text-center text-gray-400 font-medium animate-pulse">
              Loading files...
            </div>
          ) : allFiles?.length > 0 ? (
            allFiles.map((x) => <FileLists key={x._id} files={x} />)
          ) : (
            <div className="text-center text-gray-500 mt-10">
              No files uploaded yet
            </div>
          )}
        </div>

        {/* Upload Section */}
        <div className="mt-4 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            onChange={(e) => setfile(e.target.files[0])}
            type="file"
            className="text-sm text-gray-300 
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-medium
                       file:bg-gray-800 file:text-white
                       hover:file:bg-gray-700"
          />

          <button
            onClick={() => handleUpload(file)}
            className="bg-blue-600 hover:bg-blue-500 
                       transition-all duration-200
                       text-white px-6 py-2 rounded-lg
                       shadow-lg active:scale-95"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
