import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "../models/Show";
import H3 from "./H3";

type ShowTileProps = { show: Show };

const ShowTile: FC<ShowTileProps> = ({ show }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/shows/${show.id}`);
  return (
    <li
      onClick={handleClick}
      className="flex items-stretch cursor-pointer bg-gray-300 p-2 rounded-md h-32 sm:h-full overflow-hidden"
    >
      <div className="self-center w-20 sm:w-32 shrink-0">
        <img
          className="w-full"
          src={
            show.image?.medium ||
            "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          }
        ></img>
      </div>
      <div className="ml-2">
        <H3>{show.name}</H3>
        <p
          dangerouslySetInnerHTML={{ __html: show.summary }}
          className="text-gray-700 "
        ></p>
      </div>
    </li>
  );
};

ShowTile.defaultProps = {};

export default memo(ShowTile);
