import { Link } from "react-router-dom";

const CardLinks = () => {
  return (
    <>
      {/* grid of cards to link to main areas of website - see home-component diagram draw.io */}
      <div className="cardLinksComponent">
        <div className="cardGroup">
          <Link to="/your-team">
            <div className="card yourTeam">
              <h2 className="neonText">Your Team</h2>
            </div>
          </Link>

          <Link to="/user-league-table">
            <div className="card yourLeagueTable">
              <h2 className="neonText">Your League Table</h2>
            </div>
          </Link>

          <Link to="/team-stats">
            <div className="card teamStats">
              <h2 className="neonText">Team Stats</h2>
            </div>
          </Link>

          <Link to="/account">
            <div className="card yourAccount">
              <h2 className="neonText">Your Account</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardLinks;
