import FilteredTeams from "./FilteredTeams";
import SelectTeam from "./SelectTeam";
import "./TeamStatsStyling.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSortTeam } from "../../features/footballSlice";


const TeamStats = () => {
  const dispatch = useDispatch();
  // API data at team level brought in from state

  const teams = useSelector((state) => state.football.footballData.teams);

  // get a list of teams
  const names = [];
  teams.forEach((team) => {
    names.push(team.name);
  });


  useEffect(() => {
    dispatch(setSortTeam("")); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="teamStatsComponent">
        <div className="teamStatsHeaderContainer">
          <h1 className="teamStatsHeader neonText">Team Stats</h1>
        </div>
        <div className="teamStatsContainer">
          <SelectTeam />
          <FilteredTeams />
        </div>
      </div>
    </>
  );
};

export default TeamStats;
