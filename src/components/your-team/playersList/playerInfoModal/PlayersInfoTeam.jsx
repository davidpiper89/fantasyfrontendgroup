import { useSelector } from "react-redux";

const PlayersInfoTeam = (player) => {
  const team = useSelector((football) => football.football.footballData.teams);

  return team[player.team - 1].name;
};
export default PlayersInfoTeam;
