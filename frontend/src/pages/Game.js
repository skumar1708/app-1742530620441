import React, { useState, useEffect } from 'react';
import RunningMan from '../components/RunningMan';
import Wall from '../components/Wall';
import GameOver from '../components/GameOver';
import './App.css';

function Game() {
  const [isPunching, setIsPunching] = useState(false);
  const [wallPosition, setWallPosition] = useState(window.innerWidth);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWallPosition((prev) => prev - 5);
      if (wallPosition <= 100 && !isPunching) {
        setIsGameOver(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wallPosition, isPunching]);

  const handlePunch = () => {
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 500);
    setWallPosition(window.innerWidth); // Reset wall position
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        handlePunch();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="game-container">
      {isGameOver ? (
        <GameOver />
      ) : (
        <>
          <RunningMan isPunching={isPunching} />
          <Wall position={wallPosition} />
        </>
      )}
    </div>
  );
}

export default Game;