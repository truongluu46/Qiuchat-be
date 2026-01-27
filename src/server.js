import express from "express"; 
import dotenv from "dotenv";
import mongoose from 'mongoose';
import { connectDB } from "./libs/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(express.json());

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
    });
});
