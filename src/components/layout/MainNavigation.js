import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import FavoriteContext from "../../store/favorite-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favCtx = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorite
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
