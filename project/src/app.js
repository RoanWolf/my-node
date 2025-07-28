import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(todoRoutes);

export default app;
