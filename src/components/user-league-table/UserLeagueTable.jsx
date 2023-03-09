import React from "react";
import "..//..//App.css";
import { useSelector } from "react-redux";

const UserLeagueTable = () => {
  const userLeagueTable = useSelector(
    (football) => football.football.userLeagueTable
  );
  console.log(userLeagueTable);
  // function sort(a, b) {
  //   if (
  //     a.total_points - a.score_deduction <
  //     b.total_points - b.score_deduction
  //   ) {
  //     return -1;
  //   }
  // }

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
                <td>
                  {userLeagueTable[0]
                    ? userLeagueTable[0].team_name
                    : "no entry"}
                </td>
                <td>
                  {userLeagueTable[0]
                    ? userLeagueTable[0].total_points 
                    : "no entry"}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  {userLeagueTable[1]
                    ? userLeagueTable[1].team_name
                    : "no entry"}
                </td>
                <td>
                  {userLeagueTable[1]
                    ? userLeagueTable[1].total_points 
                    : "no entry"}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {userLeagueTable[2]
                    ? userLeagueTable[2].team_name
                    : "no entry"}
                </td>
                <td>
                  {userLeagueTable[2]
                    ? userLeagueTable[2].total_points 
                    : "no entry"}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  {userLeagueTable[3]
                    ? userLeagueTable[3].team_name
                    : "no entry"}
                </td>
                <td>
                  {userLeagueTable[3]
                    ? userLeagueTable[3].total_points
                    : "no entry"}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  {userLeagueTable[4]
                    ? userLeagueTable[4].team_name
                    : "no entry"}
                </td>
                <td>
                  {userLeagueTable[4]
                    ? userLeagueTable[4].total_points
                    : "no entry"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLeagueTable;
