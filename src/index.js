// require('dotenv').config({ path: '../.env' });
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import {app} from "./app.js";


dotenv.config({
  path: "../.env",
});


connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`⚙️  Server is Listening on port ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.error("MongoDB CONNECTION FAILED !!!: ", err);
})





















/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
    console.log("ERROR: ", error);
    throw error;
    })

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();*/
