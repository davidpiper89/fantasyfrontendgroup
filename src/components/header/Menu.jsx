import { Link } from "react-router-dom";
import {
  toggleBurger,
  toggleIsLoggedIn,
  resetStore,
} from "../../features/footballSlice";
import "./HeaderStyling.css";
import { useDispatch } from "react-redux";

const Menu = ({ showBurger }) => {
  const dispatch = useDispatch();

  // const logo = useRef(null);

  const logOutToggles = () => {
    // dispatch(toggleBurger());
    // dispatch(toggleIsLoggedIn());
    dispatch(resetStore());
  };

  return (
    <>
      {/* className of div changes if burger is selected, true=showBurger*/}
      <div className={showBurger ? "burgerMenuVisible" : "burgerMenuHidden"}>
        {/* Nav bar links to other main components */}
        <nav className="navBar">
          <li>
            <Link
              to="/"
              onClick={() => {
                if (window.innerWidth < 767) dispatch(toggleBurger());
              }}
              className="linkHome"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              onClick={() => {
                if (window.innerWidth < 767) dispatch(toggleBurger());
              }}
              className="linkAccount"
            >
              Your Account
            </Link>
          </li>
          <li>
            <Link
              to="/your-team"
              onClick={() => {
                if (window.innerWidth < 767) dispatch(toggleBurger());
              }}
              className="linkYourTeam"
            >
              Your Team
            </Link>
          </li>
          <li>
            <Link
              to="/user-league-table"
              onClick={() => {
                if (window.innerWidth < 767) dispatch(toggleBurger());
              }}
              className="linkUserLeagueTable"
            >
              User League Table
            </Link>
          </li>
          <li>
            <Link
              to="/team-stats"
              onClick={() => {
                if (window.innerWidth < 767) dispatch(toggleBurger());
              }}
              className="linkTeamStats"
            >
              Team Stats
            </Link>
          </li>
          <li>
            <Link to="/" onClick={logOutToggles} className="linkLogOut">
              Log out
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Menu;
