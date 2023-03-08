import { useSelector } from "react-redux";
import { useState } from "react";
import TeamError from "./TeamError";

const Budget = () => {
  // const errorMess = useSelector(state => state.football.)
  const [budget] = useState(900);
  const selectTeam = useSelector((state) => state.football.selectedTeam);
  const calculateTotalCost = () => {
    let totalCost = 0;
    let individualCost = [];

    selectTeam.forEach((element) => {
      individualCost.push(element.now_cost);
    });

    for (let i = 0; i < individualCost.length; i++) {
      totalCost += individualCost[i];
    }

    return totalCost;
  };
  const totalCost = calculateTotalCost();
  return (
    <>
      <div className="budget">
        <div>Total cost: {totalCost}</div>
        <div>Budget: {budget - totalCost}</div>
      </div>
      {budget - totalCost < 0 && (
        <TeamError
          teamInvalidError={
            "You have exceeded the budget, please remake your team"
          }
        />
      )}
    </>
  );
};

export default Budget;
