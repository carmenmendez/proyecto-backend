const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all games
router.get('/', permission('admin'), async (req, res) => {
  const games = await sequelize.models.games.findAndCountAll();
  return res.status(200).json({ data: games });
});

// Creating a new game
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const game = await sequelize.models.games.create({
    userId: body.userId,
    gameId: body.gameId,
  });
  await game.save();
  return res.status(201).json({ data: game });
});

// Update a game by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const game = await sequelize.models.games.findByPk(id);
  if (!game) {
    return res.status(404).json({ code: 404, message: 'game not found' });
  }
  const updatedGame = await game.update({
    userId: body.userId,
    gameId: body.gameId,
  });
  return res.json({ data: updatedGame });
});

// Delete a game by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const game = await sequelize.models.games.findByPk(id);
  if (!game) {
    return res.status(404).json({ code: 404, message: ' game not found' });
  }
  await game.destroy();
  return res.json();
});

module.exports = router;