import { Schema, model } from "mongoose";

interface Requirement {
  content: string;
  items: string[];
}

interface Role {
  content: string;
  items: string[];
}

interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirement;
  role: Role;
}

const requirementSchema = new Schema<Requirement>({
  content: { type: String, required: true },
  items: [{ type: String, required: true }],
});

const roleSchema = new Schema<Role>({
  content: { type: String, required: true },
  items: [{ type: String, required: true }],
});

const jobSchema = new Schema<Job>({
  id: { type: Number, required: true },
  company: { type: String, required: true },
  logo: { type: String, required: true },
  logoBackground: { type: String, required: true },
  position: { type: String, required: true },
  postedAt: { type: String, required: true },
  contract: { type: String, required: true },
  location: { type: String, required: true },
  website: { type: String, required: true },
  apply: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: requirementSchema, required: true },
  role: { type: roleSchema, required: true },
});

const Job = model<Job>("Job", jobSchema);

export default Job;
