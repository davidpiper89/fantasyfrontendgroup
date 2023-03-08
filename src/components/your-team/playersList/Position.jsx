import { useSelector } from "react-redux";

const Position = ({ player }) => {
  // pulling Position key from API that is stored in the store
  const position = useSelector(
    (football) => football.football.footballData.element_types
  );

  // using the key to define the position in string format

  return <p>{position[player.element_type - 1].plural_name_short}</p>;
};

export default Position;
