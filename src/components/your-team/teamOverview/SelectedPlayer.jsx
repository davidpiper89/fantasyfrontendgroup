import { useSelector } from "react-redux";
import Name from "./Name";
import Remove from "./Remove";

const PlayerType = ({ type, players, saved }) => (
  <div className={type}>
    <p className="typeHeader neonText">
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </p>
    <div className="playersTypeGroup">
      {players.map((player) => (
        <div key={player.code} className="players">
          <Name name={player.web_name} />
          {!saved && <Remove code={player.code} />}
        </div>
      ))}
    </div>
  </div>
);

const SelectedPlayer = () => {
  const saved = useSelector((state) => state.football.savedSquad);

  const teamPlayers = useSelector((state) => state.football.selectedTeam);

  const playerToPosition = { 1: "gkp", 2: "def", 3: "mid", 4: "fwd" };
  const players = { gkp: [], def: [], mid: [], fwd: [] };
  teamPlayers.forEach((player) => {
    players[playerToPosition[player.element_type]].push(player);
  });

  return (
    <>
      {Object.entries(players).map(([type, players]) => (
        <PlayerType key={type} type={type} players={players} saved={saved} />
      ))}
    </>
  );
};

export default SelectedPlayer;
