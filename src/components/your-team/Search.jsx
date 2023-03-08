import React from "react";
import { useDispatch } from "react-redux";
import { setSearchPlayer } from "../../features/footballSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="playerSearch">
      <input
        name="search_player"
        placeholder="Search by player"
        onInput={(e) => dispatch(setSearchPlayer(e.target.value))}
        className="inputPlayer"
      ></input>
    </div>
  );
};

export default Search;
