import {
  getAllTodos as getAllTodosApi,
  getTodoById as getTodoByIdApi,
  deleteTodoById as deleteTodoByIdApi,
  createTodo as createTodoApi,
  updateTodo as updateTodoApi
} from "../services/todoService.js";

export async function getTodos(req, res) {
  const todos = await getAllTodosApi();
  res.status(200).json(todos);
}

export async function getTodoById(req, res) {
  const { id } = req.params;
  const todo = await getTodoByIdApi(id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.status(200).json(todo);
}

export async function deleteTodoById(req, res) {
  const { id } = req.params;
  await deleteTodoByIdApi(id);
  res.status(200).json({ message: "Todo deleted successfully" });
}

export async function createTodo(req, res) {
  const addTodo = req.body;
  if(!addTodo || !addTodo.content) {
    return res.status(400).json({ message: "Content is required" });
  }
  const addedTodo = await createTodoApi(addTodo);

  return res.status(200).json({
    message: 'Todo added successfully',
    data: addedTodo,
  });
}

export async function updateTodo(req,res) {
  const {id} = req.params;
  const newTodo = req.body;
  if(!newTodo || !newTodo.content) {
    return res.status(400).json({ message: "Content is required" });
  }
  newTodo.id = id;
  await updateTodoApi(newTodo);
  return res.status(200).json({
    message: 'Todo updated successfully',
    data: newTodo,
  }); 
}