import Card from "../ui/Card";
import "./MeetupItem.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ id, image, title, address, description }, props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        address: address,
        description: description,
        image: image,
      });
    }
  };
  return (
    <div className="item">
      <Card>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className="actions">
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MeetupItem;
