import React from "react";

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row},${turn.square.column}`}>
          {turn.player} selected {turn.square.row},{turn.square.column}
        </li>
      ))}
    </ol>
  );
}

export default Log;
