import { FC, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = (props) => {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <div className="bg-gray-900 h-screen w-full fixed"></div>
        <div className="relative grow">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

MainPage.defaultProps = {};

export default memo(MainPage);
