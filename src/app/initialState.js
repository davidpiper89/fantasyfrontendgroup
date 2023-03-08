import { GKP, MID, FWD, DEF } from "../app/types";
import { data } from "./sampleData";
import { retrieve } from "../utils/storage";

const store = retrieve("store");

export const initialState = store || {
  screenMode: 0,
  showBurger: false,
  showSignUp: false, //if true, no log in
  errorMessage: "",
  notificationMessage: "",
  playerSearchTerm: "",
  sortPosition: "",
  sortTeam: "",
  currentPlayer: "",
  selectedTeam: [],
  points: "",
  scoreDeduction: "",
  isLoggedIn: false,
  footballData: {
    elements: [...data.elements],
    teams: [...data.teams],
    element_types: [...data.element_types],
  },
  user: {
    userName: "",
    email: "",
    avatar: "",
    notificationEmails: "",
    fantasy: {
      teamName: "",
      lineUp: [
        { playerId: 1, position: GKP },
        { playerId: 2, position: DEF },
        { playerId: 3, position: MID },
        { playerId: 4, position: FWD },
      ],
      lastUpdateDate: Date.now(),
    },
  },
};
