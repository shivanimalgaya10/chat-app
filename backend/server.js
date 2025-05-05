import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(cookieParser());
app.use(cors());

const PORT=process.env.PORT

server.listen(process.env.PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
  });
  