import { initialState } from "../app/initialState";
import { createSlice } from "@reduxjs/toolkit";
import { store } from "../utils/storage";

export const footballSlice = createSlice({
  name: "football",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetStore: (state) => {
      localStorage.clear();
      state.users = JSON.parse(JSON.stringify(initialState.users));
      state.selectedTeam = [];
      state.token = "";
    },
    setTeamName: (state, action) => {
      state.user.fantasy.teamName = action.payload;
      store("store", state);
    },

    setSearchPlayer: (state, action) => {
      state.playerSearchTerm = action.payload;
    },

    setSortPosition: (state, action) => {
      state.sortPosition = action.payload;
    },
    setSortTeam: (state, action) => {
      state.sortTeam = action.payload;
      store("store", state);
    },

    setSelecteInfoPlayer: (state, action) => {
      const indexOf = state.footballData.elements.findIndex((player) => {
        return player.code === action.payload;
      });
      state.currentPlayer = state.footballData.elements[indexOf];
    },

    setSelectedTeamPlayer: (state, action) => {
      const indexOf = state.footballData.elements.findIndex((player) => {
        return player.code === action.payload;
      });
      state.selectedTeam.push(state.footballData.elements[indexOf]);
    },
    removeSelectedTeamPlayer: (state, action) => {
      const indexOf = state.selectedTeam.findIndex((player) => {
        return player.code === action.payload;
      });
      state.selectedTeam.splice(indexOf, 1);
    },

    setSavedTeam: (state, action) => {
      state.user.fantasy.lineup.push(action.payload);
      store("store", state);
    },

    toggleBurger: (state) => {
      state.showBurger = !state.showBurger;
    },

    toggleSignUp: (state) => {
      state.showSignUp = !state.showSignUp;
    },
    setNewUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.user.fantasy.teamName = "";
      store("store", state);
    },

    setModal: (state, action) => {
      state.notificationMessage = action.payload;
    },

    setError: (state, action) => {
      state.errorMessage = action.payload;
    },

    setSearchInput: (state, action) => {
      state.playerSearchTerm = action.payload;
    },

    // composeTeamError: (state) => {
    //   state.errorMessage = "Team composition is invalid";
    // },

    updateUser: (state, action) => {
      const copy = { ...state.user, ...action.payload };
      state.user = copy;
      store("store", state);
    },

    setAvatar: (state, action) => {
      state.user.avatar = action.payload;
      store("store", state);
    },
    toggleNotificationEmails: (state) => {
      state.user.notificationEmails = !state.user.notificationEmails;
      store("store", state);
    },
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
    loginUser: (state, action) => {
      state.candidateUser = action.payload;
      store("store", state);
    },
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      store("store", state);
    },
    setFootballApiData: (state, { payload }) => {
      state.footballData.elements = payload.elements;
      state.footballData.teams = payload.teams;
      state.footballData.element_types = payload.element_types;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
      store("store", state);
    },
    setSyncData: (state, { payload }) => {
      // state.user = { ...state.user, ...payload.user };
      state.userLeagueTable = payload.fantasyTable

      store("store", state);
    },
  },
});

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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

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
