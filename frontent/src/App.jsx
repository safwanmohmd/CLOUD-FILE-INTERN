import React from "react";

const App = () => {
  return (
    <div>
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="h-[70%] w-[90%] bg-white/10 p-7 flex flex-col">
          <div className="border border-gray-50/10 h-[50px] flex items-center justify-between p-4">
            <div className=" ">
              <i class="text-3xl text-white bi bi-file-earmark-binary"></i>{" "}
              <span className=" text-white text-2xl">File name</span>
            </div>

            <div className="flex gap-2">
              <i class="border-2 border-red-500  bi bi-trash3 text-3xl text-red-500"></i>
              <i class="border-2 border-red-500  bi bi-pencil-square text-3xl text-blue-500"></i>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-center pt-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Upload
    </button>
  </div>
        </div>
      </div>
    </div>
  );
};

export default App;
