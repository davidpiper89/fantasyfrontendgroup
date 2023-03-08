import { useSelector } from "react-redux";
import { selectShowSignUp } from "../../../features/footballSlice";
import UserInputCollection from "./inputBoxes/UserInputCollection";
import WelcomePromo from "./Promo";
import "../../home/HomeStyling.css";

const HomeNotLoggedIn = () => {
  const showSignUp = useSelector(selectShowSignUp);

  return (
    <>
      <WelcomePromo />
      <div className="loginComponent">
        <h2 className="neonText">Login or create a new account</h2>
        {showSignUp && <UserInputCollection type="signup" />}
        {!showSignUp && <UserInputCollection />}
      </div>
    </>
  );
};

export default HomeNotLoggedIn;
