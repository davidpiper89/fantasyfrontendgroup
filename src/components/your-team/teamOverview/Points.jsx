import React from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../api";

const Points = () => {
  const selectedTeam = useSelector(
    (football) => football.football.selectedTeam
  );
  const scoreDeduction = useSelector(
    (football) => football.football.scoreDeduction
  );

  const grossPointsArray = [];
  selectedTeam.map((player) => grossPointsArray.push(player.total_points));

  const grossPoints = grossPointsArray.reduce((a, b) => {
    return a + b;
  }, 0);

  setInterval(async () => {
    const results = await getData("updateScore", grossPoints);
    console.log(results);
  }, 100000000);

  return <h1>Points : {scoreDeduction ? grossPoints - scoreDeduction : 0}</h1>;
};

export default Points;
