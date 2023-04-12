import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTeamName } from "../../../features/footballSlice";

const TeamNameForm = () => {
  const [name, setName] = useState();

  const dispatch = useDispatch();
  return (
    <div className="chooseTeamName">
      Team Name :
      <input
        onInput={(e) => setName(e.target.value)}
        placeholder="Choose a team name"
        className="inputName"
      ></input>
      <button onClick={() => dispatch(setTeamName(name))}>Submit</button>
    </div>
  );
};

export default TeamNameForm;
