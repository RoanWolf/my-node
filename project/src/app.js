import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(studentRoutes);

export default app;
