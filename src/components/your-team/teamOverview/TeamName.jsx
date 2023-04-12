
import {  useSelector } from "react-redux";
import TeamNameForm from "./TeamNameForm";


const TeamName = () => {

  const chosenName = useSelector(
    (state) => state.football.user.fantasy.teamName
  );

  return chosenName ? chosenName : <TeamNameForm/>
  
};
export default TeamName;
