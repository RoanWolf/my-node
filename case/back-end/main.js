import express from "express";
import cors from "cors";
import { readFile, writeFile } from "node:fs/promises";

const app = express();
// cors middleware to allow cross-origin requests
app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  const data = await readFile("./assets/tododata.json", "utf-8");
  return res.status(200).json(JSON.parse(data));
});
// Add a new task
app.post("/data/add", async (req, res) => {
  const { id, content, create_time } = req.body;
  const data = await readFile("./assets/tododata.json", "utf-8");
  const tododata = JSON.parse(data);
  tododata.push({ id, content, create_time });
  await writeFile("./assets/tododata.json", JSON.stringify(tododata, null, 2));
  return res.status(200).json({ message: "Data added successfully" });
});
// Delete a task
app.delete("/data/del", async (req, res) => {
  const { id } = req.body;
  const data = await readFile("./assets/tododata.json", "utf-8");
  const tododata = JSON.parse(data);
  const updatedData = tododata.filter((item) => item.id !== id);
  await writeFile("./assets/tododata.json", JSON.stringify(updatedData, null));
  return res.status(200).json({ message: "Data deled successfully" });
});
app.listen(5000);
