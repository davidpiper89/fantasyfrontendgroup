import { useSelector, useDispatch } from "react-redux";
import LoginInput from "./LoginInput";
import SignUpInput from "./SignupInput";
import {
  selectShowSignUp,
  toggleSignUp,
} from "../../../../features/footballSlice";


const UserInputCollection = ({ type }) => {
  const showSignUp = useSelector(selectShowSignUp);
  const dispatch = useDispatch();

  return (
    <div className="userInputFlexContainer">
      {/* className of div changes if toggle selected to show title*/}
      <h3>{type === "signup" ? "SIGNUP" : "LOGIN"}</h3>

      {/* signup or login input boxes inserted depending on state */}
      <div className="inputCollection">
        {showSignUp && <SignUpInput />}
        {!showSignUp && <LoginInput />}
      </div>

      {/* toggle between signup and login */}
      <div
        onClick={() => {
          dispatch(toggleSignUp());
        }}
      >
        {/*state brought in to toggle text between login and signup*/}
        {showSignUp ? (
          <p className="linkHover">Back to login</p>
        ) : (
          <p className="linkHover">Create an account</p>
        )}
      </div>
      
    </div>
  );
};

export default UserInputCollection;
