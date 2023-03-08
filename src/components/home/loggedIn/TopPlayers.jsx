import { useSelector } from "react-redux";
import {
  sorting,
  filterGoalkeepers,
  filterDefenders,
  filterMidfielders,
  filterForwards,
} from "./UtilsSortPlayer";
import { selectElements } from "../../../features/footballSlice";

const TopPlayers = () => {
  //pulls player data from the store
  const players = useSelector(selectElements);
  const playersArr = [...players];
  //sorting players in decscending order of total points, function imported from UtilsSortPlayer folder
  const playersArrSort = sorting(playersArr);

  const goalkeepersArr = [...playersArrSort];
  const defendersArr = [...playersArrSort];
  const midfieldersArr = [...playersArrSort];
  const forwardsArr = [...playersArrSort];

  //filter functions that are imported from the utilsSortPlayer file
  const goalkeepers = filterGoalkeepers(goalkeepersArr);
  const defenders = filterDefenders(defendersArr);
  const midfielders = filterMidfielders(midfieldersArr);
  const forward = filterForwards(forwardsArr);

  const { web_name, saves } = goalkeepers[0];
  const { web_name: web_name2, saves: saves2 } = goalkeepers[1];
  const { web_name: web_name3, saves: saves3 } = goalkeepers[2];
  const { web_name: web_name4, goals_conceded } = defenders[0];
  const { web_name: web_name5, goals_conceded: goals_conceded2 } = defenders[1];
  const { web_name: web_name6, goals_conceded: goals_conceded3 } = defenders[2];
  const { web_name: web_name7, assists } = midfielders[0];
  const { web_name: web_name8, assists: assists2 } = midfielders[1];
  const { web_name: web_name9, assists: assists3 } = midfielders[2];
  const { web_name: web_name10, goals_scored } = forward[0];
  const { web_name: web_name11, goals_scored: goals_scored2 } = forward[1];
  const { web_name: web_name12, goals_scored: goals_scored3 } = forward[2];

  return (
    <>
      <div className="topPlayersTitleContainer">
        <div className="title">
          <p className="topPlayersHeader">-Top players-</p>
        </div>
      </div>
      <div className="topPlayersComponent">
        <div className="topGoalkeepersContainer">
          <div className="topPlayerCategoryContainer">
            <p className="topPlayerCategoryHeader">Top Goalkeepers</p>
          </div>
          <div className="individualPlayerContainer">
            1: {web_name}
            <p>Saves: {saves}</p>
          </div>
          <div className="individualPlayerContainer">
            2: {web_name2}
            <p>Saves: {saves2}</p>
          </div>
          <div className="individualPlayerContainer">
            3: {web_name3}
            <p>Saves: {saves3}</p>
          </div>
        </div>
        <div className="topDefendersContainer">
          <div className="topPlayerCategoryContainer">
            <p className="topPlayerCategoryHeader">Top Defenders</p>
          </div>
          <div className="individualPlayerContainer">
            1: {web_name4}
            <p>Goals conceded: {goals_conceded}</p>
          </div>
          <div className="individualPlayerContainer">
            2: {web_name5}
            <p>Goals conceded: {goals_conceded2}</p>
          </div>
          <div className="individualPlayerContainer">
            3: {web_name6}
            <p>Goals conceded: {goals_conceded3}</p>
          </div>
        </div>

        <div className="topMidfieldersContainer">
          <div className="topPlayerCategoryContainer">
            <p className="topPlayerCategoryHeader">Top Midfielders</p>
          </div>
          <div className="individualPlayerContainer">
            1: {web_name7}
            <p>Assists: {assists}</p>
          </div>
          <div className="individualPlayerContainer">
            2: {web_name8}
            <p>Assists: {assists2}</p>
          </div>
          <div className="individualPlayerContainer">
            3: {web_name9}
            <p>Assists: {assists3}</p>
          </div>
        </div>

        <div className="topForwardsContainer">
          <div className="topPlayerCategoryContainer">
            <p className="topPlayerCategoryHeader">Top Forwards</p>
          </div>
          <div className="individualPlayerContainer">
            1: {web_name10}
            <p>Goals scored: {goals_scored}</p>
          </div>
          <div className="individualPlayerContainer">
            2: {web_name11}
            <p>Goals scored: {goals_scored2}</p>
          </div>
          <div className="individualPlayerContainer">
            3: {web_name12}
            <p>Goals scored: {goals_scored3}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPlayers;
