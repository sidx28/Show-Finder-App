import { FC, memo } from "react";
import { Show } from "../models/Show";

type ShowTileProps = { show: Show };

const ShowTile: FC<ShowTileProps> = ({ show }) => {
  return (
    <div className="flex items-stretch bg-gray-300 p-2 rounded-md">
      <div className="w-20 shrink-0">
        <img
          className="w-full"
          src={
            show.image?.medium ||
            "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          }
        ></img>
      </div>
      <div className="ml-2">
        <h3>{show.name}</h3>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};

ShowTile.defaultProps = {};

export default memo(ShowTile);
