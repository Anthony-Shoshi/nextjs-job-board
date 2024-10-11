// utils/mongoose.ts
import mongoose from "mongoose";

let isConnected = false; // Track connection status

export async function connectToDatabase() {
    if (isConnected) {
        return; // Avoid reconnecting if already connected
    }
    await mongoose.connect(process.env.CONNECTION_STRING as string);
    isConnected = true;
}
