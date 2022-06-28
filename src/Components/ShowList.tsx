import { ChangeEvent, FC, InputHTMLAttributes, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../action";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../selector";
import { State } from "../store";
import ShowTile from "./ShowTile";

type ShowListProps = {
  shows: Show[];
  query: string;
  fetchShows: (query: string) => void;
};

const ShowList: FC<ShowListProps> = ({ shows, fetchShows, query }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    fetchShows(event.target.value);
  };
  return (
    <>
      <div className="p-5">
        <input placeholder="search" value={query} onChange={handleChange} />
        <div className="space-y-3 mt-5">
          {shows.map((s) => (
            <ShowTile key={s.id} show={s} />
          ))}
        </div>
      </div>
    </>
  );
};

ShowList.defaultProps = {};
const mapStateToProps = (s: State) => ({
  shows: showsSelector(s),
  query: showsQuerySelector(s),
});
const mapDispatchToProps = {
  fetchShows: showsFetchAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
