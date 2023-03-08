//returns the error that is stored in the store
const TeamError = ({ teamInvalidError }) => {
  return (
    <div className="TeamErrorContainer">
      <p>{teamInvalidError}</p>
    </div>
  );
};
export default TeamError;
