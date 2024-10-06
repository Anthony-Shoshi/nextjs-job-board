// utils/mongoose.ts
import mongoose from "mongoose";

let isConnected = false; // Track connection status

export async function connectToDatabase() {
    if (isConnected) {
        return; // Avoid reconnecting if already connected
    }
    await mongoose.connect('mongodb://127.0.0.1:27017/job-board');
    isConnected = true;
}
