const tables = require("../tables");

const add = async (req, res, next) => {
  // Extract the item data from the request body
  const { title, time, difficulty, price, picture, diet, type, season } =
    req.body.data;
  try {
    // Insert the item into the database
    const insertId = await tables.recipe.create(
      title,
      time,
      difficulty,
      price,
      picture,
      diet,
      type,
      season
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const recipe = await tables.recipe.readAll();

    // Respond with the items in JSON format
    res.json(recipe);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const recipeByFav = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const recipe = await tables.recipe.recipeByFav(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const recipeById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const recipe = await tables.recipe.recipeById(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const recipe = await tables.recipe.delete(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.json(recipe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const randomRecipe = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const recipe = await tables.recipe.randomRecipe();

    // Respond with the items in JSON format
    res.json(recipe);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const recipeByTag = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const recipes = await tables.recipe.recipeByTag(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (recipes == null) {
      res.sendStatus(404);
    } else {
      res.json(recipes);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  browse,
  deleteById,
  randomRecipe,
  recipeByFav,
  recipeById,
  recipeByTag,
};
