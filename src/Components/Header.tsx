import { FC, memo } from "react";
import H1 from "./H1";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="bg-[url('https://wallpaper.dog/large/20493599.jpg')]">
      <div className="p-5 sm:p-10">
        <H1 className="text-gray-400">SHOW FINDER APP</H1>
      </div>
    </div>
  );
};

Header.defaultProps = {};

export default memo(Header);
