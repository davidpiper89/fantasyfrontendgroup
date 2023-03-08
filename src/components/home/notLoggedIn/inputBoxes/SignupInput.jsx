import { useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../../../../validation";
import { setModal, toggleSignUp } from "../../../../features/footballSlice";
import axios from "axios";
import { apiURL } from "../../../../config";

const SignUpInput = () => {
  const dispatch = useDispatch();

  const [email, inputEmail] = useState("");
  const [userName, inputuserName] = useState("");
  const [password, inputPassword] = useState("");
  const [confirmPassword, inputConfirmPassword] = useState("");

  // function to send input to back end
  const onUserSignUp = async () => {
    const { data } = await axios.post(`${apiURL}/add`, {
      email: email,
      user_name: userName,
      password: password,
    });
    // setStatus(data.status);
    //IF SIGNUP IF STATUS 1, SEND USER TO LOGIN SCREEN
    if (data.status === 1) {
      dispatch(
        setModal("Successful Signup, please sign in to start your team!")
      );
      dispatch(toggleSignUp());
    }
    if (data.status === 0) {
      dispatch(
        setModal("This user already exists, please choose another username")
      );
    }
  };

  const onClick = () => {
    // signup data sent onInput to be validated
    const results = validate("signUp", {
      email,
      userName,
      password,
      confirmPassword,
    });
    // if not valid, modal with error displayed
    if (results !== true) {
      const errors = Object.values(results);
      dispatch(setModal(errors));
    }

    // if validated, onInput sent to back end
    else {
      //SEND THE EMAIL, USER and PASSWORD TO BACK END TO SIGN UP
      onUserSignUp();
    }
  };

  return (
    <div className="signup inputBox">
      {/* input boxes for signup, each box stores local state*/}

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        type="button"
      >
        <div className="inputbox">
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              onInput={(e) => {
                inputEmail(e.target.value);
              }}
              name="email"
              required
            />
            <span>Email</span>
            <i></i>
          </label>
        </div>
        <div className="inputbox">
          <label htmlFor="userName">
            <input
              type="text"
              id="userName"
              onInput={(e) => {
                inputuserName(e.target.value);
              }}
              name="userName"
              required
            />
            <span>Username</span>
            <i></i>
          </label>
        </div>
        <div className="inputbox">
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              onInput={(e) => {
                inputPassword(e.target.value);
              }}
              name="password"
              required
            />
            <span>Password</span>
            <i></i>
          </label>
        </div>
        <div className="inputbox">
          <label htmlFor="confirmPassword">
            <input
              type="password"
              id="confirmPassword"
              onInput={(e) => {
                inputConfirmPassword(e.target.value);
              }}
              name="confirmPassword"
              required
            />
            <span>Confirm Password</span>
            <i></i>
          </label>
        </div>

        <div className="submitButton">
          <button onClick={onClick}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpInput;
