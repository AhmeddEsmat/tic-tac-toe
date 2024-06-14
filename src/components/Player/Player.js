import React from "react";
import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [text, setText] = useState("Edit");
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((wasEditing) => !wasEditing);
    setText(isEditing ? "Edit" : "Done");
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEdit}>{text}</button>
    </li>
  );
}

export default Player;
