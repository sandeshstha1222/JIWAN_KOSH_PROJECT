import express, { json, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import user from "./models/user.js";
import Project from "./models/project.js";
import userRouter from "./router/userRouter.js";
import projectRouter from "./router/projectRouter.js";
import benificiaryRouter from "./router/benificiaryRouter.js";


dotenv.config();
const app= express();

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
app.use("/project",projectRouter);
app.use("/benificiary",benificiaryRouter);

app.listen(process.env.PORT, console.log(`Hello from port: ${process.env.PORT}`));
