import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal, setTeamName } from "../../../features/footballSlice";
import { getData } from "../../../api";
import { validate } from "../../../validation";

const TeamName = () => {
  const teamName = useSelector(
    (football) => football.football.user.fantasy.teamName
  );
  const dispatch = useDispatch();

  const onSetTeamName = async () => {
    const data = await getData("updateTeamName", { teamName });
    if (data.status === 1) {
      dispatch(setModal("Team name changed successfully"));
    } else {
      dispatch(setModal("Team name not saved"));
    }
  };

  const onClick = () => {
    // teamName data sent onInput to be validated
    const results = validate("teamName", {
      teamName,
    });
    // if not valid, modal with error displayed
    if (results !== true) {
      const errors = Object.values(results);
      dispatch(setModal(errors));
    }

    // if validated, onInput sent to back end
    else {
      //SEND THE EMAIL, USER and PASSWORD TO BACK END TO SIGN UP
      dispatch(setTeamName(teamName));
      onSetTeamName();
    }
  };

  return (
    <div className="chooseTeamName">
      <input
        onInput={(e) => dispatch(setTeamName(e.target.value))}
        placeholder="Choose a team name"
        className="inputName"
      ></input>
      <button onClick={onClick}>submit</button>
    </div>
  );
};
export default TeamName;
