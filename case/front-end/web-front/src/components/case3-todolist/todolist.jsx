import React, { useState, useEffect } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  // Stable data simulating fetched data from backend
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks from backend on component mount
  useEffect(() => {
    // Simulate fetching data from backend
    const fetchTasks = async () => {
      const fetchedTasks = await fetch("http://localhost:5000/data").then(
        (response) => response.json()
      );
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  // Handle adding a new task
  const handleAddTask = async () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        content: newTask,
        create_time: new Date().toISOString(),
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");

      const response = await fetch("http://localhost:5000/data/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskObj),
      });

      if (!response.ok) {
        throw new Error("Failed to submit requirement");
      }
    }
  };

  // Handle deleting a task
  const handleDeleteTask = async (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));

    const response = await fetch("http://localhost:5000/data/del", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: taskId }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit requirement");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        To-Do List
      </Typography>

      {/* Input for adding a new task */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          startIcon={<AddIcon />}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Add
        </Button>
      </div>

      {/* List of tasks */}
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            style={{
              backgroundColor: "#fff",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          >
            <ListItemText
              primary={task.content}
              secondary={`Created on: ${new Date(
                task.create_time
              ).toLocaleString()}`}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              color="error"
              onClick={() => handleDeleteTask(task.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
