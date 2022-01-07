import { useContext } from "react/cjs/react.development";
import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";
function Favorite() {
  const favoritesCtx = useContext(FavoriteContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorite yet. Start adding some.</p>;
  } else {
    content = (
      <MeetupList
        key="favorite-page"
        meetups={favoritesCtx.favorites}
      ></MeetupList>
    );
  }

  return (
    <section>
      <h1>Favorites Meetups</h1>
      {content}
    </section>
  );
}
export default Favorite;
