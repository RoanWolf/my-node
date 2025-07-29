import Todo from "../models/Todo.js";
import { Op } from "sequelize";
export async function getAllTodos() {
  const todos = await Todo.findAll();

  return todos;
}

export async function getTodoById(todoId) {
  const todo = await Todo.findOne({ where: { id: todoId } });

  return todo;
}

export async function deleteTodoById(todoId) {
  await Todo.destroy({
    where: {
      id: todoId,
    },
  });
}

export async function createTodo(addTodo) {
  const addedTodo = await Todo.create(addTodo);

  return addedTodo;
}

export async function updateTodo(updateTodo) {
  const { id, ...fields } = updateTodo;
  await Todo.update(fields, {
    where: {
      id: id,
    },
  });
}

export async function searchAllTodos(searchTodo) {
  return await Todo.findAll({
    where: {
      content: {
        [Op.like]: `%${searchTodo}%`,
      }
    }
  });
}
