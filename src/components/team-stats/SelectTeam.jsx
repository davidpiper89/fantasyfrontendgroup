import { useSelector, useDispatch } from "react-redux";
import { setSortTeam, selectTeams } from "../../features/footballSlice";

const SelectTeam = () => {
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  // get a list of teams
  const names = [];
  teams.forEach((team) => {
    names.push(team.name);
  });

  return (
    <div className="teamSelect">
      <select
        // value={sortTeam}
        name="teamName"
        id="teamName"
        // dispatch input of select to store
        onInput={(e) => {
          dispatch(setSortTeam(e.target.value));
        }}
      >
        <option value="">Please select a team</option>
        {names.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTeam;
