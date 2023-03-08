import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../api";
import { setModal } from "../../../features/footballSlice";

const Save = () => {
  const dispatch = useDispatch();
  const saveTeam = useSelector((state) => state.football.selectedTeam);

  const saveDBTeam = async (dBTeam, scoreDeduction) => {
    const usersTeam = await getData("saveTeam", { dBTeam, scoreDeduction });
    if (usersTeam.status === 1) {
      dispatch(setModal("team saved"));
    } else {
      dispatch(setModal("Did not work"));
    }
  };

  const setSavedTeam = (team) => {
    const startingScoreArray = [];
    const dBTeam = [];
    if (team.length < 11) {
      return dispatch(setModal("Please select 11 players"));
    } else {
      team.map((player) =>
        dBTeam.push({ code: player.code, position: player.element_type })
      );
      team.map((player) => startingScoreArray.push(player.total_points));

      const scoreDeduction = startingScoreArray.reduce((a, b) => {
        return a + b;
      }, 0);

      saveDBTeam(dBTeam, scoreDeduction);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setSavedTeam(saveTeam);
        }}
      >
        Save Team
      </button>
    </>
  );
};

export default Save;
