import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { setModal } from "../../features/footballSlice";
import { getData } from "../../api";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};
const WebcamContainer = () => {
  const dispatch = useDispatch();
  //   use initial state
  // const avatar = useSelector(selectAvatar);
  const [userImage, setUserImage] = useState("");
  // console.log(userImage);

  const setUserAvatar = async () => {
    await getData("updateUserImage", {
      userImage,
    });

  };

  const setAsAvatar = (e) => {
    e.preventDefault();
    //NEEDS TO SEND PHOTO TO BACK END
    setUserAvatar();
    dispatch(setModal("Your avatar has been updated."));
  };

  const clearPhoto = (e) => {
    e.preventDefault();
    setUserImage("");

  };

  return (
    // take photo with permission, photo stored in initial state
    <>
      <div className="mainWebcamContainer">
        <h1 className="neonText"> Your Account</h1>
        <div className="webCam">
          <Webcam
            className="webcamView"
            audio={false}
            height={300}
            screenshotFormat="image/jpeg"
            width={300}
            videoConstraints={videoConstraints}
          >
            {/* hide caputre button if there is a picture in local state */}
            {({ getScreenshot }) => {
              return (
                !userImage && (
                  <div className="submitButton">
                    <button
                      className="button"
                      id="captureBtn"
                      onClick={() => {
                        const imageSrc = getScreenshot();
                        setUserImage(imageSrc);
                      }}
                    >
                      Capture photo
                    </button>
                  </div>
                )
              );
            }}
          </Webcam>
          {/* show picture captured */}
          {userImage && <img id="overlay" src={userImage} alt="" />}
        </div>
        {/* send picture from local state to avatar */}
        <div className="submitButton">
          {/* set picture as Avatar, by updating state */}

          {userImage && (
             <button
            className="button"
            type="submit"
            id="setAsAvatar"
            onClick={setAsAvatar}
          >
            Save Avatar
          </button>
          )}

          {/* clear image from local state and allow capture button to display again */}
          <button id="clearPhoto" onClick={clearPhoto}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};
export default WebcamContainer;
