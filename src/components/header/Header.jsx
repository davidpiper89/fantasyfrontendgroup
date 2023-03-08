import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { toggleBurger, selectShowBurger } from "../../features/footballSlice";
import "./HeaderStyling.css";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import IsOffline from "./IsOffline";

const Header = () => {
  let [online, isOnline] = useState(navigator.onLine);
  const dispatch = useDispatch();
  const showBurger = useSelector(selectShowBurger);
  const isLoggedIn = useSelector((state) => state.football.isLoggedIn);

  const logo = useRef(null);

  const setOnline = () => {
    isOnline(true);
  };
  const setOffline = () => {
    isOnline(false);
  };
  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      logo.current,
      { x: "80vw" },
      { duration: 2.5, ease: "bounce.out", x: 0 }
    );
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="headerFlexContainerEmpty">
        <IsOffline online={online} />
        <Link to="/">
          <div className="logo" ref={logo}>
            <img
              src="../../assets/headerImages/logo-no-backround.svg"
              id="logo"
              alt="logo"
            />
          </div>
        </Link>
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="headerFlexContainer">
        {/* logo sends user back to homepage */}
        <IsOffline online={online} />
        <div className="headerMainFlexContainer">
          <Link to="/">
            <div className="logo" ref={logo}>
              <img
                src="../../assets/headerImages/logo-no-backround.svg"
                id="logo"
                alt="logo"
              />
            </div>
          </Link>

          <div
            tabIndex="0"
            className={showBurger ? "burgerMenu active" : "burgerMenu"}
          >
            <div
              className="buttonHolder"
              onClick={() => {
                dispatch(toggleBurger());
              }}
            >
              <div className="burgerLineTop"></div>
              <div className="burgerLineMiddle"></div>
              <div className="burgerLineBottom"></div>
            </div>
          </div>
          {/* state of burger toggle brought in */}
          <Menu showBurger={showBurger} />
        </div>
      </div>
    );
  }
};

export default Header;
