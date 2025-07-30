import { Router } from "express";
import {
  getTodoById,
  getTodos,
  deleteTodoById,
  createTodo,
  updateTodo,
  searchAllTodos,
} from "../controllers/todoController.js";

const router = Router();

router.route("/todo").get(getTodos).post(createTodo);

router.route("/todo/search").get(searchAllTodos);

router.route("/todo/:id").get(getTodoById).delete(deleteTodoById).post(updateTodo);

export default router;
