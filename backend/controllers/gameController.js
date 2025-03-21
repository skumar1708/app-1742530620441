const Game = require('../models/Game');

exports.startGame = async (req, res) => {
  try {
    const game = new Game();
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ error: 'Could not start the game' });
  }
};

exports.endGame = async (req, res) => {
  try {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    res.status(200).json({ message: 'Game over' });
  } catch (error) {
    res.status(500).json({ error: 'Could not end the game' });
  }
};