import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../api";
import { setModal } from "../../../features/footballSlice";

const Save = () => {
  const dispatch = useDispatch();
  const selectedTeam = useSelector((state) => state.football.selectedTeam);
  const teamName = useSelector((state) => state.football.user.fantasy.teamName);

  // Save the team to the database
  const saveDBTeam = async (dBTeam, scoreDeduction) => {
    const usersTeam = await getData("saveTeam", {
      teamName,
      dBTeam,
      scoreDeduction,
    });
    if (usersTeam.status === 1) {
      dispatch(setModal("team saved"));
    } else {
      dispatch(setModal("Did not work"));
    }
  };

  // Prepare the team data and call saveDBTeam
  const setSavedTeam = (team) => {
    if (team.length < 11) {
      return dispatch(setModal("Please select 11 players"));
    }

    if (!teamName) {
      dispatch(setModal("Please Select Team Name"));
    } else {
      const dBTeam = team.map((player) => ({ code: player.code }));
      const scoreDeduction = calculateScoreDeduction(team);

      saveDBTeam(dBTeam, scoreDeduction);
    }
  };

  // Calculate the score deduction from the team
  const calculateScoreDeduction = (team) => {
    return team.reduce((accumulator, player) => {
      return accumulator + player.total_points;
    }, 0);
  };

  return (
    <>
      <button
        onClick={() => {
          setSavedTeam(selectedTeam);
        }}
      >
        Save Team
      </button>
    </>
  );
};

export default Save;
