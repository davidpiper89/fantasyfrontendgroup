import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const Account = () => {
  // if (!isLoggedIn) {
  //   return <Navigate replace to="/" />;
  // }

  return (
    <>
      <div className="accountMain">
        <Avatar />

        <UserInfo />
      </div>
    </>
  );
};

export default Account;
