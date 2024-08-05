import mongoose from "mongoose";
import Job from "../models/Job";
import {jobs} from "./jobs";

mongoose
  .connect("mongodb://localhost:27017/jobs")
  .then(async () => {
    console.log("MongoDB connected");

    await Job.deleteMany({});
    await Job.insertMany(jobs);

    console.log("Data seeded");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
