import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlayerName from "./PlayerName";
import Position from "./Position";
import Team from "./Team";
import InfoButton from "./InfoButton";
import Form from "./Form";
import SelectButton from "./SelectButton";
import Value from "./Value";

const PlayerList = () => {
  // pull player list from store
  const players = useSelector(
    (football) => football.football.footballData.elements
  );

  const selectedPlayers = useSelector(
    (football) => football.football.selectedTeam
  );

  // put list of players from store into local state
  // const [data, setdata] = useState([...players]);
  let data = [...players];
  // put default sort value into state
  const [order, setorder] = useState("ASC");
  const [col, setCol] = useState("web_name");

  // sort items based on clicked value

  if (order === "ASC") {
    const sorted = data.sort((a, b) => (a[col] > b[col] ? 1 : -1));
    data = sorted;
  }
  if (order === "DSC") {
    const sorted = data.sort((a, b) => (a[col] < b[col] ? 1 : -1));
    data = sorted;
  }

  const sorting = (col) => {
    setorder(order === "ASC" ? "DSC" : "ASC");
    setCol(col);
  };

  const positionOrder = useSelector(
    (football) => football.football.sortPosition
  );

  // pull searchterm from store
  const searchTerm = useSelector(
    (football) => football.football.playerSearchTerm
  );
  const sortTeam = useSelector((football) => football.football.sortTeam);

  // filter players based on searchTerm
  let filteredPlayers = data;
  if (searchTerm) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return player.web_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    });
  }
  if (positionOrder) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return player.element_type === positionOrder;
    });
  }
  if (sortTeam) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return player.team === sortTeam;
    });
  }

  const selectedPlayerIds = [];

  selectedPlayers.forEach((player) => {
    selectedPlayerIds.push(player.code);
  });

  filteredPlayers = filteredPlayers.filter((player) => {
    return !selectedPlayerIds.includes(player.code);
  });

  let gkarray = [];
  let defarray = [];
  let midarray = [];
  let fwdarray = [];

  selectedPlayers.forEach((player) => {
    if (player.element_type === 1) {
      gkarray.push(player.element_type);
    }
    if (player.element_type === 2) {
      defarray.push(player.element_type);
    }
    if (player.element_type === 3) {
      midarray.push(player.element_type);
    }
    if (player.element_type === 4) {
      fwdarray.push(player.element_type);
    }
  });

  if (gkarray.length === 1) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return !gkarray.includes(player.element_type);
    });
  }

  if (defarray.length === 4) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return !defarray.includes(player.element_type);
    });
  }
  if (midarray.length === 4) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return !midarray.includes(player.element_type);
    });
  }
  if (fwdarray.length === 2) {
    filteredPlayers = filteredPlayers.filter((player) => {
      return !fwdarray.includes(player.element_type);
    });
  }

  // map over remaining players and creating an interface
  return (
    <div>
      <table className="yourTeamTable">
        <thead>
          <tr>
            <td></td>
            <td onClick={() => sorting("web_name")}>Player</td>
            <td onClick={() => sorting("element_type")}>Pos.</td>
            <td onClick={() => sorting("team")}>Team</td>
            <td onClick={() => sorting("form")}>Form</td>
            <td onClick={() => sorting("now_cost")}>Value</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player) => (
            <tr key={player.code}>
              <td>
                <InfoButton player={player} />
              </td>
              <td className="playerCol">
                <PlayerName player={player} />
              </td>
              <td>
                <Position player={player} />
              </td>
              <td>
                <Team player={player} />
              </td>
              <td>
                <Form player={player} />
              </td>
              <td>
                <Value player={player} />
              </td>
              <td>
                <SelectButton player={player} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
