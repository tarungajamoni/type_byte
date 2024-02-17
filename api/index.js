import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import UserRoutes from "./routes/UserRoute.js";
import { signup } from "./controllers/AuthController.js";
import AuthRoutes from "./routes/AuthRoute.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongo is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running!");
});

app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoutes);

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})