import express from "express";
import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import fileroutes from "./route/fileRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const startServer = async () => {
  try {
    await mongoose.connect(process.env.mongoUri, {
      family: 4,
    });
    console.log("Connected to DB");

    app.listen(process.env.PORT, () => {
      console.log(`Server started on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("DB Connection Error:", error.message);
  }
};

startServer();

const cors = require("cors");

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api", fileroutes);
