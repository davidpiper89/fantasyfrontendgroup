import React from "react";
import TeamName from "./TeamName";
import SelectedPlayer from "./SelectedPlayer";
import Save from "./Save";
import Points from "./Points"
import Budget from "./Budget";

const TeamOverview = () => {
  return (
    <>
      <TeamName />
      <Points />
      <div id="team_overview">
        <SelectedPlayer />
      </div>
      <div className="BudgetAndSaveContainer">
        <div>
          <Budget />
        </div>
        <div className="saveButtonContainer">
          <Save />
        </div>
      </div>
    </>
  );
};

export default TeamOverview;
