import LikeButton from "./LikeButton";
import { useState } from "react";

type PropertyTileAttributes = {
  image: string;
  name: string;
  id?: number;
};

const PropertyTile = ({ image, name }: PropertyTileAttributes) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="property-tile">
      <img className="property-img" src={image}></img>
      <p>{name}</p>
      <LikeButton liked={liked} setLiked={setLiked} />
    </div>
  );
};

export default PropertyTile;
