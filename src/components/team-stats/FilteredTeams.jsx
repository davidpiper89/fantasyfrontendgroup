import { selectSortTeam, selectTeams } from "../../features/footballSlice";
import { useSelector } from "react-redux";

const FilteredTeams = () => {
  const sortTeam = useSelector(selectSortTeam);
  const teams = useSelector(selectTeams);
  const result = teams.filter((team) => team.name === sortTeam);


  return (
    <>
      {result.map((item) => {
        const {
          name,
          strength,
          strength_overall_home,
          strength_overall_away,
          strength_attack_home,
          strength_attack_away,
          strength_defence_home,
          strength_defence_away,
          win,
          draw,
          loss,
          played,
          position,
        } = item;
        return (
          <div key={name} className="teams">
            <h3>{name}</h3>
            <div className="teamLogo">
              <img
                src={`../../assets/teamLogos/${item.id}.png`}
                alt="teamLogos"
              ></img>
            </div>
            <div className="teamHeadline">
              <p>Stength: {strength}</p>
              <p>Position: {position}</p>
              <p>Games Played: {played}</p>
            </div>
            <div className="games">
              <h4>Game Stats</h4>
              <div className="gameStats">
                <p>Wins: {win}</p>
                <p>Draws: {draw}</p>
                <p>Losses: {loss}</p>
              </div>
            </div>
            <div className="strength">
              <h4>Strength</h4>
              <div className="strengthStats">
                <div className="homeStrength">
                  <p className="bold">Home</p>
                  <p>Strength: {strength_overall_home}</p>
                  <p>Attack: {strength_attack_home}</p>
                  <p>Defence: {strength_defence_home}</p>
                </div>
                <div className="awayStrength">
                  <p className="bold">Away</p>
                  <p>Strength: {strength_overall_away}</p>
                  <p>Attack: {strength_attack_away}</p>
                  <p>Defence: {strength_defence_away}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilteredTeams;
