import express from "express";
import cors from "cors";
import { readFile } from "node:fs/promises";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const data = await readFile("./assets/data.json", "utf-8");
  return res.status(200).json(JSON.parse(data));
});

app.post("/", (req, res) => {
  
  return res.status(200).json(JSON.parse(data));
});

app.listen(5000);
