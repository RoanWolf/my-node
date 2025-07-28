import { Router } from "express";
import {
  getTodoById,
  getTodos,
  deleteTodoById,
  createTodo,
  updateTodo,
} from "../controllers/todoController.js";
const router = Router();

router.get("/todo", getTodos).post("/todo", createTodo);

router
  .get("/todo/:id", getTodoById)
  .delete("/todo/:id", deleteTodoById)
  .post("/todo/:id", updateTodo);
  
export default router;
