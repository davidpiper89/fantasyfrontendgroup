import { initialState } from "../app/initialState";
import { createSlice } from "@reduxjs/toolkit";
import { store } from "../utils/storage";

export const footballSlice = createSlice({
  name: "football",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Reset the store to its initial state and clear localStorage
    resetStore: (state) => {
      localStorage.clear();
      state.users = JSON.parse(JSON.stringify(initialState.users));
      state.selectedTeam = [];
      state.token = "";
    },
    // Set the user's fantasy team name
    setTeamName: (state, action) => {
      state.user.fantasy.teamName = action.payload;
      store("store", state);
    },
    // Set the search term for a player
    setSearchPlayer: (state, action) => {
      state.playerSearchTerm = action.payload;
    },
    // Set the sort position for players
    setSortPosition: (state, action) => {
      state.sortPosition = action.payload;
    },
    // Set the sort team for players
    setSortTeam: (state, action) => {
      state.sortTeam = action.payload;
      store("store", state);
    },
    // Set the selected player's information
    setSelecteInfoPlayer: (state, action) => {
      const indexOf = state.footballData.elements.findIndex((player) => {
        return player.code === action.payload;
      });
      state.currentPlayer = state.footballData.elements[indexOf];
    },
    // Add a player to the user's selected team
    setSelectedTeamPlayer: (state, action) => {
      const indexOf = state.footballData.elements.findIndex((player) => {
        return player.code === action.payload;
      });
      state.selectedTeam.push(state.footballData.elements[indexOf]);
    },
    // Remove a player from the user's selected team
    removeSelectedTeamPlayer: (state, action) => {
      const indexOf = state.selectedTeam.findIndex((player) => {
        return player.code === action.payload;
      });
      state.selectedTeam.splice(indexOf, 1);
    },
    // Save the user's team
    setSavedTeam: (state, action) => {
      state.user.fantasy.lineup.push(action.payload);
      store("store", state);
    },
    // Toggle the burger menu
    toggleBurger: (state) => {
      state.showBurger = !state.showBurger;
    },
    // Toggle the sign up form
    toggleSignUp: (state) => {
      state.showSignUp = !state.showSignUp;
    },
    // Set the new user's information
    setNewUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.user.fantasy.teamName = "";
      store("store", state);
    },
    // Set the modal's notification message
    setModal: (state, action) => {
      state.notificationMessage = action.payload;
    },
    // Set the error message
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
    // Set the search input value for players
    setSearchInput: (state, action) => {
      state.playerSearchTerm = action.payload;
    },
    // Update the user's information
    updateUser: (state, action) => {
      const copy = { ...state.user, ...action.payload };
      state.user = copy;
      store("store", state);
    },
    // Set the user's avatar
    setAvatar: (state, action) => {
      state.user.avatar = action.payload;
      store("store", state);
    },
    // Toggle the user's notification emails preference
    toggleNotificationEmails: (state) => {
      state.user.notificationEmails = !state.user.notificationEmails;
      store("store", state);
    },
    // Set the screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
    // Set the candidate user for login
    loginUser: (state, action) => {
      state.candidateUser = action.payload;
      store("store", state);
    },
    // Toggle the isLoggedIn state
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      store("store", state);
    },
    // Set the API token
    setToken: (state, { payload }) => {
      state.token = payload;
      store("store", state);
    },
    // Set synchronized data from the server
    setSyncData: (state, { payload }) => {
      console.log(payload.selectedTeam);
      state.user = { ...state.user, ...payload.user };
      state.userLeagueTable = payload.fantasyTable;
      if (payload.selectedTeam === []) {
        state.selectedTeam = payload.selectedTeam;
      }
      store("store", state);
    },
  },
});

// Export the action creators
export const {
  setFootballApiData,
  setModal,
  composeTeamError,
  setSearchInput,
  setError,
  toggleBurger,
  toggleSignUp,
  setNewUser,
  setScreenMode,
  toggleNotificationEmails,
  setAvatar,
  updateUser,
  setSortPosition,
  setSearchPlayerOrTeam,
  setSortTeam,
  setSearchPlayer,
  setSearchTeam,
  removeSelectedTeamPlayer,
  setSavedTeam,
  setSelecteInfoPlayer,
  setSelectedTeamPlayer,
  setTeamName,
  loginUser,
  toggleIsLoggedIn,
  setToken,
  setSyncData,
  resetStore,
} = footballSlice.actions;

// Export selectors
export const selectUser = (state) => state.football.user;
export const selectSetAvatar = (state) => state.football.user.avatar;
export const selectNotificationEmails = (state) =>
  state.football.user.notificationEmails;

export const selectNotificationMessage = (state) =>
  state.football.notificationMessage;

export default footballSlice.reducer;
export const selectShowSignUp = (state) => state.football.showSignUp;
export const selectShowBurger = (state) => state.football.showBurger;
export const selectIsLoggedIn = (state) => state.football.isLoggedIn;
export const selectAvatar = (state) => state.football.user.avatar;
export const selectTeamName = (state) => state.football.user.fantasy.teamName;
export const selectTeams = (state) => state.football.footballData.teams;
export const selectSortTeam = (state) => state.football.sortTeam;
export const selectElements = (state) => state.football.footballData.elements;
export const selectToken = (state) => state.football.token;
