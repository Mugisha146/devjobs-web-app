import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import jobRoutes from "./routes/jobRoutes";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
