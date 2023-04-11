import React from "react";
import "..//..//App.css";
import { useSelector } from "react-redux";

const UserLeagueTable = () => {
  const userLeagueTable = useSelector(
    (football) => football.football.userLeagueTable
  );

  const copy = [...userLeagueTable];
  const sorted = copy.sort((a, b) => (a.total_points < b.total_points ? 1 : -1));


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
              <tr>
                <td>1</td>
                <td>{sorted[0] ? sorted[0].team_name : "no entry"}</td>
                <td>{sorted[0] ? sorted[0].total_points : "no entry"}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{sorted[1] ? sorted[1].team_name : "no entry"}</td>
                <td>{sorted[1] ? sorted[1].total_points : "no entry"}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{sorted[2] ? sorted[2].team_name : "no entry"}</td>
                <td>{sorted[2] ? sorted[2].total_points : "no entry"}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{sorted[3] ? sorted[3].team_name : "no entry"}</td>
                <td>{sorted[3] ? sorted[3].total_points : "no entry"}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>{sorted[4] ? sorted[4].team_name : "no entry"}</td>
                <td>{sorted[4] ? sorted[4].total_points : "no entry"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLeagueTable;
