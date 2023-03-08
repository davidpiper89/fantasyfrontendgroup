import React from "react";

const GoalsScored = (player) => {
  if (player.element_type === 1) {
    return <p>Saves : {player.saves}</p>;
  } else return <p>Goals Scored : {player.goals_scored}</p>;
};

export default GoalsScored;
