// require('dotenv').config({ path: './env' });
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})


connectDB()















/* 
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const app = express();

//  function connectDB () { };
// connectDB(); 

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("DATABASE CONNECTED");
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      console.log("Application not able to talk to the database");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})(); 
*/
