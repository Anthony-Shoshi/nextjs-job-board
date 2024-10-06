"use server";

import { JobModel } from "@/models/Job";
import { connectToDatabase } from "@/utils/mongoose";

export async function saveJobPost(data: FormData) {
    await connectToDatabase();
    const jobDoc = await JobModel.create(Object.fromEntries(data));
    return JSON.parse(JSON.stringify(jobDoc));
}