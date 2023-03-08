import { useSelector } from "react-redux";

const Team = ({ player }) => {
  // pulling Team key from API that is stored in the store
  const team = useSelector((football) => football.football.footballData.teams);

  // using the key to define the team in string format

  return <p>{team[player.team - 1].short_name}</p>;
};
export default Team;
