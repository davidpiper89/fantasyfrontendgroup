import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setModal,
  toggleIsLoggedIn,
  setToken,
  setSyncData,
} from "../../../../features/footballSlice";
import { Link } from "react-router-dom";
import { getData } from "../../../../api";

const LoginInput = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const data = await getData("login", { email, password });

    if (data.status === 0) {
      dispatch(
        setModal("Username and/or password not found, please try again")
      );
      return;
    }

    //it worked so store the token
    dispatch(setToken(data.token));

    //get the latest data from the server

    const syncData = await getData("syncData", data.token);
    console.log(data.token);
    dispatch(setSyncData(syncData));


    //toggle logged in
    dispatch(toggleIsLoggedIn());
  };

  return (
    <>
      <div className="spacer"></div>
      <div className="login inputBox">
        {/* input boxes for login, each box stores local state*/}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="inputbox">
            <label htmlFor="userName">
              <input
                type="text"
                id="userName"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                name="userName"
                required
              />
              <span>Email</span>
              <i></i>
            </label>
          </div>
          <div className="inputbox">
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                required
              />
              <span>Password</span>
              <i></i>
            </label>
          </div>
          <div className="submitButton">
            <button onClick={onLogin}>Login</button>
          </div>
          <div className="forgot">
            <Link to={"/forgot"}>Forgot password?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginInput;
