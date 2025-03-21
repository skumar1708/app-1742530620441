import React from 'react';
import './App.css';

function Wall({ position }) {
  return (
    <div className="wall" style={{ left: position + 'px' }}></div>
  );
}

export default Wall;