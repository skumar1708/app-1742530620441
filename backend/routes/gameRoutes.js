const express = require('express');
const { startGame, endGame } = require('../controllers/gameController');
const router = express.Router();

router.post('/start', startGame);
router.delete('/end/:id', endGame);

module.exports = router;