import express, { json, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";

dotenv.config();
const app = express();

app.use(express.json());

(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();

app.use("/user", userRouter);

app.listen(
  process.env.PORT,
  console.log(`Port is running in: ${process.env.PORT}`)
);
