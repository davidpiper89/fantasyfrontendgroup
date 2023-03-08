import { useSelector } from "react-redux";

const TopTeam = () => {
  //pulls team data from the store
  const team = useSelector((state) => state.football.footballData.teams);
  const teamArr = [...team];
  //sorts the array of football teams and returns them in descending order by their total points
  const teamArrSort = teamArr.sort((a, b) => {
    return b.points - a.points;
  });
  return (
    <>
      <div className="topTeamComponent">
        <div className="topTeamHeaderContainer">
          <div className="topTeamHeader">
            <p>This weeks top team is {teamArrSort[0].name}!</p>
            <img
              src={`../../assets/teamLogos/${teamArrSort[0].id}.png`}
              alt=""
              width="200px"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTeam;
