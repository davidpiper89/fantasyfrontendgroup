import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../features/footballSlice";
import { getData } from "../../../../api";

const Forgot = () => {
  // const forgot =

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const resetPassword = async () => {
    const results = await getData("forgotPassword", { email });

    if (results.status === 1) {
      dispatch(setModal("Password Reset, check your email"));
    } else {
      dispatch(setModal("Did not work"));
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="inputbox">
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              required
            />
            <span>Email</span>
            <i></i>
          </label>
        </div>
        <button onClick={resetPassword}>Submit</button>
      </form>
    </>
  );
};
// onClick={() => forgot()}

export default Forgot;
