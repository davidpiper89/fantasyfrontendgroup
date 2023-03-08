// import { useDispatch } from "react-redux";

const Splash = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setScreenMode(1));
  //   }, 1000);
  // });
  return (
    <>
      <div className="splashScreen">
        <h1 className="neonLightFlicker">Welcome to Fantasy Football!</h1>
        <p className="shadowForSpashScreen">
          Make the best team now with your favourite players!
        </p>
      </div>
    </>
  );
};

export default Splash;
