import { useState, useEffect } from "react";

export default function AllTodoTasks() {
  const [TodoTasksArray, setTodoTasksArray] = useState([]);
  const [newTask, setNewTask] = useState("");
  async function handleChangeIsCompleted(id, isCompleted) {
    //front
    setTodoTasksArray((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !isCompleted } : task
      )
    );
    // end
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: !isCompleted }),
    });
  }
  useEffect(() => {
    async function fetchTodoTasks() {
      const response = await fetch("http://localhost:3000/todo");
      const data = await response.json();
      setTodoTasksArray(data);
      console.log(data);
    }
    fetchTodoTasks();
  }, []);
  async function handleAddTask(newTask) {
    if (!newTask.trim()) return;
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newTask }),
    });
    const newTodo = await response.json();
    setTodoTasksArray((prevTasks) => [...prevTasks, newTodo.data]);
    setNewTask("");
  }
  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      await handleAddTask(newTask);
    }
  }
  return (
    <div>
      <h2>All Todo Tasks</h2>
      <div>
        <input
          type="text"
          placeholder="输入任务名"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            handleAddTask(newTask);
          }}
        >
          {" "}
          添加任务
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          backgroundColor: "#ece4f4ff",
          padding: "20px",
        }}
      >
        {TodoTasksArray.map((task) => (
          <li key={task.id} style={{ margin: "15px", fontSize: "25px" }}>
            <strong>
              {task.content}

              <input
                type="checkBox"
                checked={task.isCompleted}
                onChange={() =>
                  handleChangeIsCompleted(task.id, task.isCompleted)
                }
              />
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
