import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { json, response } from "express";

import user from "./models/user.js";
import Project from "./models/project.js";
import userRouter from "./router/userRouter.js";
import projectRouter from "./router/projectRouter.js";
import beneficiaryRouter from "./router/beneficiaryRouter.js";
import donorRouter from "./router/donorRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
// separate file for db connection and call that function in main.js
// app.use(cors())

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
app.use("/project", projectRouter);
app.use("/beneficiary", beneficiaryRouter);
app.use("/donor", donorRouter);

// const PORT = process.env.PORT
// use PORT variable in app.listen()
app.listen(
  process.env.PORT,
  console.log(`Hello from port: ${process.env.PORT}`)
);
