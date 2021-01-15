const Recipe = require("../models/recipe");

const getRecipes = async (req, res) => {
  Recipe.find().then((result) => {
    res.json(result);
  });
};

const postRecipes = async (req, res) => {
  const recipe = new Recipe(req.body);

  recipe
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

const getRecipesId = async (req, res) => {
  const id = req.params.id;

  Recipe.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const putRecipesId = async (req, res) => {
  const id = req.params.id;
  const recipe = new Recipe(req.body);

  Recipe.findByIdAndUpdate(id, recipe, { rawResult: true })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRecipesId = async (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getRecipes,
  postRecipes,
  getRecipesId,
  putRecipesId,
  deleteRecipesId,
};
