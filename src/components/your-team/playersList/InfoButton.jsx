import React, { useState } from "react";
import PlayerInfoModal from "./playerInfoModal/PlayerInfoModal";

const InfoButton = (props) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenInfo(!openInfo);
        }}
        className="openInfoBtn"
      >
        i
      </button>
      {openInfo && <PlayerInfoModal {...props} setOpenInfo={setOpenInfo} />}
    </>
  );
};

export default InfoButton;
