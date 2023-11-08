const authController = require('../controllers/authController');
const gameController = require('../controllers/gameController');

module.exports = (app) => {
  app.get('/', (_, res) => {
    res.json({ message: 'REST service operational' });
  });

  app.use('/api/user', authController);
  app.use('/api/game', gameController);
};
