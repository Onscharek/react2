import React from "react";
import Player from "./Player";
import Players from "./Players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;