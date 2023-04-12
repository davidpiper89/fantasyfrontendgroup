import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Account from "./components/account/Account";
import YourTeam from "./components/your-team/YourTeam";
import UserLeagueTable from "./components/user-league-table/UserLeagueTable";
import TeamStats from "./components/team-stats/TeamStats";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Forgot from "./components/home/notLoggedIn/inputBoxes/Forgot";

import { getData } from "./api";
import {
  selectToken,
  setFootballApiData,
  setSyncData,
} from "./features/footballSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const getFootballData = useCallback(async () => {
    const results = await getData("getFootballData");

    if (results.status === 1) {
      dispatch(setFootballApiData(results.footballData));
    }
  }, [dispatch]);

  const syncData = useCallback(async () => {
    if (token) {
      console.log("getting new data.");
      const syncDataResponse = await getData("syncData", token);
      dispatch(setSyncData(syncDataResponse));
    }
  }, [dispatch, token]);

  useEffect(() => {
    getFootballData();
  }, [getFootballData]);

  useEffect(() => {
    const intervalId = setInterval(syncData, 20000);
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
