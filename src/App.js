import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Import components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Account from "./components/account/Account";
import YourTeam from "./components/your-team/YourTeam";
import UserLeagueTable from "./components/user-league-table/UserLeagueTable";
import TeamStats from "./components/team-stats/TeamStats";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Forgot from "./components/home/notLoggedIn/inputBoxes/Forgot";

// Import API call and Redux actions
import { getData } from "./api";
import {
  selectToken,
  setFootballApiData,
  setSyncData,
  setSavedSquad,
} from "./features/footballSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // Fetch football data from API and update Redux store
  const getFootballData = useCallback(async () => {
    const results = await getData("getFootballData");

    if (results.status === 1) {
      dispatch(setFootballApiData(results.footballData));
    }
  }, [dispatch]);

  // Sync data based on user token and update Redux store
  const syncData = useCallback(async () => {
    if (token) {
      console.log("getting new data.");
      const syncDataResponse = await getData("syncData", token);
      if (syncDataResponse.selectedTeam[0]) {
        dispatch(setSavedSquad());
      }
      dispatch(setSyncData(syncDataResponse));
    }
  }, [dispatch, token]);

  // Fetch football data on component mount
  useEffect(() => {
    getFootballData();
  }, [getFootballData]);

  // Sync data on component mount and every 20 seconds
  useEffect(() => {
    // Call syncData immediately on component mount
    syncData();

    // Set up interval to call syncData every 20 seconds
    const intervalId = setInterval(syncData, 20000);

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [syncData]);

  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          {/* Define routes and their corresponding components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/your-team" element={<YourTeam />} />
            <Route path="/user-league-table" element={<UserLeagueTable />} />
            <Route path="/team-stats" element={<TeamStats />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
      <Modal />
    </>
  );
};

export default App;
