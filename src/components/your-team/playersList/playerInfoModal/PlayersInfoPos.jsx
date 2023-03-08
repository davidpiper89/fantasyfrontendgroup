import { useSelector } from "react-redux";

const PlayersInfoPosition = (player) => {
  const position = useSelector(
    (football) => football.football.footballData.element_types
  );

  return position[player.element_type - 1].singular_name;
};

export default PlayersInfoPosition;
