import React from "react";
import "..//..//App.css";
import { useSelector } from "react-redux";

// Component for each table row
const TableRow = ({ rank, team }) => {
  const { team_name, total_points, score_deduction } = team || {};
  const score = team ? total_points - score_deduction : "no entry";

  return (
    <tr>
      <td>{rank}</td>
      <td>{team_name || "no entry"}</td>
      <td>{score}</td>
    </tr>
  );
};

const UserLeagueTable = () => {
  const userLeagueTable = useSelector(
    (football) => football.football.userLeagueTable
  );

  // Sort userLeagueTable directly while spreading to create a new array
  const sorted = [...userLeagueTable].sort((a, b) =>
    a.total_points - a.score_deduction < b.total_points - b.score_deduction
      ? 1
      : -1
  );

  return (
    <>
      <div className="mainContainerUl">
        <div className="userLeagueHeaderContainer">
          <h1 className="userLeagueHeader neonText">
            User League Table - TOP 5
          </h1>
        </div>
        <div className="userLeagueTableContainer">
          <table className="userLeagueTable">
            <thead>
              <tr>
                <td>Rank</td>
                <td>Team</td>
                <td>TOT</td>
              </tr>
            </thead>
            <tbody>
              {/* Render rows using a loop */}
              {sorted.slice(0, 5).map((team, index) => (
                <TableRow key={index} rank={index + 1} team={team} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLeagueTable;
