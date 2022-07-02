import { FC, memo } from "react";
import Header from "./Header";
import ShowList from "./ShowList";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = (props) => {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <div className="bg-gray-900 h-screen w-full fixed"></div>
        <div className="relative">
          <Header />
          <ShowList />
        </div>
      </div>
    </>
  );
};

MainPage.defaultProps = {};

export default memo(MainPage);
