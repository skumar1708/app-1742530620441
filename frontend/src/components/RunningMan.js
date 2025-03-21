import React from 'react';
import './App.css';

function RunningMan({ isPunching }) {
  return (
    <div className={"running-man" + (isPunching ? " punching" : "")}>
      <svg> <!-- Add your SVG for running man here --> </svg>
    </div>
  );
}

export default RunningMan;