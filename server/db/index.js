import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const DB_URI = process.env.DB_URI;
export async function connectDB() {
    try {
        await mongoose.connect(DB_URI);
        console.log("> DB CONNECTED");
    } catch (error) {
        console.log(error);
    }
}