import React from "react";

const PlayerName = ({ player }) => {
  return (
    // pulling players name from API that has been drilled from PlayerList
    <p>{player.form}</p>
  );
};

export default PlayerName;
