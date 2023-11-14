const gameController = require('express').Router();

const { hasUser } = require('../middlewares/guards');
const { getAll, createGame } = require('../services/gameService');

const { parseError } = require('../util/parser');

gameController.get('/', hasUser(), async (req, res) => {
  let items = [];

  try {
    if (req.query.search !== undefined) {
      items = await getAll(req.query.search.trim());
    } else {
      items = await getAll();
    }
    res.json(items);
  } catch (error) {
    const message = parseError(error);
    res.status(400).json({ message });
  }
});

gameController.post('/', hasUser(), async (req, res) => {
  const game = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    genre: req.body.genre,
    price: Number(req.body.price),
    _ownerId: req.user._id,
  };

  try {
    const item = await createGame(game);
    res.json(item);
  } catch (err) {
    const message = parseError(err);
    res.status(400).json({ message });
  }
});

module.exports = gameController;
