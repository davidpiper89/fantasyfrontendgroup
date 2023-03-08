import React from "react";
import Assists from "./Assists";
import ExpectedAssists from "./ExpectedAssists";
import MinutesPlayed from "./MinutesPlayed";
import Creativity from "./Creativity";
import GoalsConceded from "./GoalsConceded";
import GoalsScored from "./GoalsScored";
import ExpectedGoals from "./ExpectedGoals";
import Influence from "./Influence";
import PlayersInfoTeam from "./PlayersInfoTeam";
import "./PlayerInfo.css";
import PlayersInfoPosition from "./PlayersInfoPos";

const PlayerInfoModal = ({ player, setOpenInfo }) => {
  return (
    <div className="playerInfoBackground">
      <div className="playerInfoContainer">
        <div className="playerInfoTitle">
          <div className="closeModalButton">
            <button onClick={() => setOpenInfo(false)}> X </button>
          </div>
          <h1>
            {player.first_name} {player.second_name}
          </h1>
          <h2>
            <PlayersInfoTeam {...player} />
          </h2>
          <img
            src={`../../assets/teamLogos/${player.team}.png`}
            alt=""
            width="100px"
          ></img>
          <h3>
            <PlayersInfoPosition {...player} />
          </h3>
        </div>
        <div className="playerInfoBody">
          <MinutesPlayed {...player} />
          <GoalsScored {...player} />
          <ExpectedGoals {...player} />
          <Assists {...player} />
          <ExpectedAssists {...player} />
          <GoalsConceded {...player} />
          <Creativity {...player} />
          <Influence {...player} />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoModal;
