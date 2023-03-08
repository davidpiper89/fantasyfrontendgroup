import React from "react";
import { setSelectedTeamPlayer } from "../../../features/footballSlice";
import { useDispatch } from "react-redux";

const SelectButton = ({ player }) => {
  const dispatch = useDispatch();

  return (
    // dispatching unique player code to store under the Key playerSearchTerm
    <button
      onClick={() => {
        dispatch(setSelectedTeamPlayer(player.code));
      }}
    >
      +
    </button>
  );
};

export default SelectButton;
