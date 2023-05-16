import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../api";

const Points = () => {
  const { selectedTeam, scoreDeduction } = useSelector((state) => ({
    selectedTeam: state.football.selectedTeam,
    scoreDeduction: state.football.scoreDeduction,
  }));

  useEffect(() => {
    // Calculate gross points
    const grossPoints = selectedTeam.reduce((accumulator, player) => {
      return accumulator + player.total_points;
    }, 0);

    // Set points
    const setPoints = async () => {
      await getData("updateScore", grossPoints);
    };

    setPoints();
  }, [selectedTeam]);

  // Calculate net points
  const netPoints =
    selectedTeam.reduce((accumulator, player) => {
      return accumulator + player.total_points;
    }, 0) - (scoreDeduction || 0);

  return <h1>Points: {netPoints}</h1>;
};

export default Points;
