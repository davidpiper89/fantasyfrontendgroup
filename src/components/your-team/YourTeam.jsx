import React from "react";
import SortSelections from "./SortSelections";
import TeamOverview from "./teamOverview/TeamOverview";
import Search from "./Search";
import PlayerList from "./playersList/PlayerList";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./YourTeamStyling.css";
import DefinedTeamName from "./teamOverview/DefinedTeamName";

const YourTeam = () => {
  const isLoggedIn = useSelector((state) => state.football.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate replace to="/" />;
  }
  return (
    <>
      <h1 className="teamName neonText">
        Your Team - <DefinedTeamName />
      </h1>

      <div id="user_team_selection_view">
        <div className="teamOverview">
          <TeamOverview />
        </div>
        <div className="playerSelection">
          <div className="searchOptions">
            <Search />
            <SortSelections />
          </div>
          <div id="userpage_playerlist">
            <PlayerList />
          </div>
        </div>
      </div>
    </>
  );
};

export default YourTeam;
