import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getData } from "../../../api";

// Custom hook to update scores every 20 seconds
const useUpdateScore = (grossPoints) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      const results = await getData("updateScore", grossPoints);
      console.log(grossPoints);

      if (results.status === 1) {
        console.log("scores updated");
      } else {
        console.log("scores not updated");
      }
    }, 20000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [grossPoints]);
};

const Points = () => {
  const selectedTeam = useSelector((state) => state.football.selectedTeam);
  const scoreDeduction = useSelector((state) => state.football.scoreDeduction);

  // Calculate gross points
  const grossPoints = selectedTeam.reduce((accumulator, player) => {
    return accumulator + player.total_points;
  }, 0);

  // Call custom hook to update scores
  useUpdateScore(grossPoints);

  return <h1>Points: {scoreDeduction ? grossPoints - scoreDeduction : 0}</h1>;
};

export default Points;
