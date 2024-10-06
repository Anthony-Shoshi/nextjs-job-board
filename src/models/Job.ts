import { model, models, Schema } from "mongoose";

const JobSchema = new Schema({
    title: { type: String, required: true },
    jobIcon: { type: String },
    contactPersonImg: { type: String },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    remote: { type: String, required: true },
    orgId: { type: String, required: true },
    countryName: { type: String, required: true },
    stateName: { type: String, required: true },
    cityName: { type: String, required: true },
    fullTime: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
});

export const JobModel = models.Job || model('Job', JobSchema);