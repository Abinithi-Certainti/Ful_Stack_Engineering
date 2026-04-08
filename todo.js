const express = require("express");

const app = express();
app.use(express.json());

const todos = [];

app.post("/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);

  return res.status(201).json({
    message: "Todo created",
    todo: newTodo,
  });
});

app.get("/todos", (req, res) => {
  return res.status(200).json(todos);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  todo.completed = true;

  return res.status(200).json({
    message: "Todo updated",
    todo,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
