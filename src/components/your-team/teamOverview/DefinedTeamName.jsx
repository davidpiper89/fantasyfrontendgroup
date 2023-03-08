import { useSelector } from "react-redux";
import { selectTeamName } from "../../../features/footballSlice";

const DefinedTeamName = () => {
  const teamName = useSelector(selectTeamName);
  return <>{teamName}</>;
};

export default DefinedTeamName;
