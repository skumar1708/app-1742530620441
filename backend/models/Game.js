const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  status: {
    type: String,
    default: 'running',
    enum: ['running', 'over']
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;