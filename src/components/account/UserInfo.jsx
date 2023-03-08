import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModal,
  toggleNotificationEmails,
  selectNotificationEmails,
} from "../../features/footballSlice";
import { validate } from "../../validation";
import { Navigate } from "react-router-dom";
import { getData } from "../../api";

const UserInfo = () => {
  // // define user by importing from football slice
  // const user = useSelector(selectUser);
  // set dispatch to dispatch function from react-redux
  const dispatch = useDispatch();
  // extricate required info from initial state user object

  // const [userInput, setUserInput] = useState({
  //   userName: user.userName,
  //   email: user.email,
  //   password: user.password,
  //   confirmPassword: user.password,
  // });

  const [email, inputEmail] = useState("");
  const [userName, inputUserName] = useState("");
  const [password, inputPassword] = useState("");
  const [confirmPassword, inputConfirmPassword] = useState("");

  const setUserUpdate = async () => {
    await getData("updateAccount", {
      email: email,
      password: password,
      userName: userName,
    });
  };

  const checked = useSelector(selectNotificationEmails);

  const onChange = async () => {
    await getData("updateNotificationEmails", {
      checked: !checked,
    });

    dispatch(toggleNotificationEmails());
  };

  const [shouldRedirect, setShouldRedirect] = useState(false);

  // const onChange = (e) => {
  //   setUserInput({ ...userInput, [e.target.name]: e.target.value });
  // };
  if (shouldRedirect) {
    return <Navigate replace to="/your-team" />;
  }
  return (
    <>
      <div className="userInputFlexContainer">
        {/* create form to collect user info updates */}
        <div className="setNotificationPref">
          <h2 className="neonText">Update your account information</h2>

          {/* Use checkbox to update the state to reflect whether user wants email notifications or not */}
          <label>
            Please check this box to receive notification emails about fantasy
            football:
            <input
              className="notificationToggle"
              id="notificationToggle"
              type="checkbox"
              name="notifications"
              onChange={onChange}
              checked={checked}
            />
          </label>
        </div>

        <form
          id="updateUserInfoForm"
          // prevent page from reloding when form is submitted
          onSubmit={(e) => {
            e.preventDefault();
            // selectNotificationEmails("");
          }}
        >
          {/* collect user input to set to state in user object */}
          <div className="inputbox">
            <label htmlFor="userName">
              <input
                onInput={(e) => {
                  inputUserName(e.target.value);
                }}
                type="text"
                name="userName"
                id="userNameInput"
                required
              />
              <span>Username</span>
              <i></i>
            </label>
          </div>
          <div className="inputbox">
            <label htmlFor="email">
              <input
                onInput={(e) => {
                  inputEmail(e.target.value);
                }}
                type="email"
                name="email"
                id="emailInput"
                required
              />
              <span>Email </span>
              <i></i>
            </label>
          </div>
          <div className="inputbox">
            <label htmlFor="password">
              <input
                onInput={(e) => {
                  inputPassword(e.target.value);
                }}
                type="password"
                name="password"
                id="passwordInput"
                required
              />
              <span>Password </span>
              <i></i>
            </label>
          </div>
          <div className="inputbox">
            <label htmlFor="confirmPassword">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onInput={(e) => {
                  inputConfirmPassword(e.target.value);
                }}
                required
              />
              <span>Confirm Password </span>
              <i></i>
            </label>
          </div>
          <div className="submitButton">
            <button
              className="button"
              type="submit"
              onClick={() => {
                // use joi to validate user info

                const result = validate("signUp", {
                  email,
                  userName,
                  password,
                  confirmPassword,
                });
                // if user input valid, set to user object
                if (result !== true) {
                  const errors = Object.values(result);
                  dispatch(setModal(errors));
                } else {
                  setUserUpdate();
                  //SEND NEW DATA TO THE SERVER

                  //PROBABLY DEFUNKT
                  //  dispatch(updateUser(userInput));

                  dispatch(setModal("Your details have been updated."));
                  setTimeout(function () {
                    dispatch(setModal(""));
                    setShouldRedirect(true);
                  }, 5000);

                  //show message in modal that update has been successful
                }
              }}
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
