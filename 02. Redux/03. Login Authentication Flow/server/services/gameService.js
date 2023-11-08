const Game = require('../models/Game');

async function getAll(searchQuery) {
  let queryTitle = {};
  let queryGenre = {};
  const initialProperties = 'title description imageUrl genre price';

  try {
    if (searchQuery) {
      queryTitle = { title: new RegExp(searchQuery, 'i') };
      queryGenre = { genre: new RegExp(searchQuery, 'i') };
    }
    return await Game.find({ $or: [queryTitle, queryGenre] }).select(
      initialProperties
    );
  } catch (error) {
    throw new Error(error);
  }
}

async function createGame(game) {
  return Game.create(game);
}

module.exports = {
  getAll,
  createGame,
};
