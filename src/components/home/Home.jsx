import { useState, useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import HomeNotLoggedIn from "./notLoggedIn/HomeNotLoggedIn";
import HomeLoggedIn from "./loggedIn/HomeLoggedIn";
import { selectIsLoggedIn } from "../../features/footballSlice";
import Splash from "./Splash";


const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const screenMode = useSelector((state) => state.football.screenMode);
  const [screenMode, setScreenMode] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScreenMode(1);
    }, 2000);
  });

  if (screenMode === 0) {
    return <Splash />;
  }

  return (
    <>
      <div className="spacer"></div>
      <div className="homeComponent">
        {isLoggedIn ? <HomeLoggedIn /> : <HomeNotLoggedIn />}
      </div>
     
    </>
  );
};

export default Home;
