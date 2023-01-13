import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import "./MainNavigation.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className="header">
      <div className="logo"> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups </Link>
          </li>
          <li>
            <Link to="/newMeetup"> NewMeetup </Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className="badge">{favoritesCtx.totalFavorites}</span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
