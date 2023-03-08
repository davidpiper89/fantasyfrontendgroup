import React from "react";
import { useDispatch } from "react-redux";
import { removeSelectedTeamPlayer } from "../../../features/footballSlice";

const Remove = ({ code }) => {
  const dispatch = useDispatch();
  return (
    <div className="buttonContainer">
      <button
        className="removeBtn"
        onClick={() => dispatch(removeSelectedTeamPlayer(code))}
      >
        X
      </button>
    </div>
  );
};

export default Remove;
