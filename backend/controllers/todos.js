const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  Todo.find().then((result) => {
    res.json(result);
  });
};

const postTodos = async (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).send("Recipe Created");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
};

const getTodosId = async (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const putTodosId = async (req, res) => {
  const id = req.params.id;
  const todo = new Todo(req.body);

  Todo.findByIdAndUpdate(id, todo, { rawResult: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTodosId = async (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getTodos,
  postTodos,
  getTodosId,
  putTodosId,
  deleteTodosId,
};
