import React from "react";

const IsOffline = ({ online }) => {
  if (online === false) {
    return (
      <div className="offlineDisplay">
        You are currently Offline. Trying to reconnect..
      </div>
    );
  }
};

export default IsOffline;
