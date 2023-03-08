import React from "react";

const PlayerName = ({ player }) => {
  return (
    // pulling players name from API that has been drilled from PlayerList
    <p>{player.web_name}</p>
  );
};

export default PlayerName;
