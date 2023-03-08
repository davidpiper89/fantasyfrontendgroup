import { useSelector } from "react-redux";
import Name from "./Name";
import Remove from "./Remove";

const SelectedPlayer = () => {
  const teamPlayers = useSelector((state) => state.football.selectedTeam);

  const playerToPosition = { 1: "gkp", 2: "def", 3: "mid", 4: "fwd" };
  const players = { gkp: [], def: [], mid: [], fwd: [] };
  teamPlayers.forEach((player) => {
    players[playerToPosition[player.element_type]].push(player);
  });

  return (
    <>
      <div className="gkp">
        <p className="typeHeader neonText">Goalkeeper</p>
        <div className="playersTypeGroup">
          {players.gkp.map((player) => {
            return (
              <div key={player.code} className="players">
                <Name name={player.web_name} />
                {/* <Position position={player.element_type} /> */}
                <Remove code={player.code} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="def">
        <p className="typeHeader neonText">Defenders</p>
        <div className="playersTypeGroup">
          {players.def.map((player) => {
            return (
              <div key={player.code} className="players">
                <Name name={player.web_name} />
                {/* <Position position={player.element_type} /> */}
                <Remove code={player.code} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mid">
        <p className="typeHeader neonText">Midfielders</p>
        <div className="playersTypeGroup">
          {players.mid.map((player) => {
            return (
              <div key={player.code} className="players">
                <Name name={player.web_name} />
                {/* <Position position={player.element_type} /> */}
                <Remove code={player.code} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="fwd">
        <p className="typeHeader neonText">Forwards</p>
        <div className="playersTypeGroup">
          {players.fwd.map((player) => {
            return (
              <div key={player.code} className="players">
                <Name name={player.web_name} />
                {/* <Position position={player.element_type} /> */}
                <Remove code={player.code} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectedPlayer;
