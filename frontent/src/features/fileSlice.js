import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

export const getFiles = createAsyncThunk("files/getfiles", async () => {
  try {
    const response = await axiosInstance.get("/files");

    console.log(response.data.allFiles);
    return { success: true, ...response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
});

export const uploadFile = createAsyncThunk("files/upload", async (file) => {

  try {
     const formData = new FormData();
  formData.append("file", file);
  const response = await axiosInstance.post("/upload", formData);
  console.log(response)
  return {success:true, ...response.data}
  } catch (error) {
    return { success:false , message: error.response?.data?.message || error.message}
    
  }
 
});
export const deleteFile = createAsyncThunk("files/delete", async (id) => {

  try {
     const formData = new FormData();

  const response = await axiosInstance.delete(`/${id}`);
  console.log(response)
  return {success:true, ...response.data}
  } catch (error) {
    return { success:false , message: error.response?.data?.message || error.message}
    
  }
 
});

const fileSlice = createSlice({
  name: "files",
  initialState: { allFiles: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFiles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFiles.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.allFiles = action.payload.allFiles;
      }
      state.loading = false;
    });
    builder.addCase(uploadFile.pending , (state)=>{
      state.loading=true
    })
    builder.addCase(uploadFile.fulfilled, (state,action) => {
      state.loading=false
     
    })

    builder.addCase(deleteFile.pending, (state)=>{
      state.loading = true
    })
    builder.addCase(deleteFile.fulfilled, (state,action)=>{
      state.loading = false
      console.log(action.payload)
    })
  },
});

export default fileSlice.reducer;
