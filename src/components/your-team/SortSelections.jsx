import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortPosition, setSortTeam } from "../../features/footballSlice";

const SortSelections = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.football.footballData.teams);

  const positions = [
    { name: "Pos.", id: 0 },
    { id: 1, name: "GKP" },
    { id: 2, name: "DEF" },
    { id: 3, name: "MID" },
    { id: 4, name: "FWD" },
  ];

  const names = ["Select by team"];

  teams.forEach((team) => {
    names.push(team.name);
  });

  return (
    <>
      <select
        onInput={(e) => dispatch(setSortPosition(Number(e.target.value)))}
      >
        {positions.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
      <select onInput={(e) => dispatch(setSortTeam(Number(e.target.value)))}>
        {names.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortSelections;
