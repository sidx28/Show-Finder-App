import { ChangeEvent, FC, memo } from "react";
import { connect } from "react-redux";
import { showListFetchAction } from "../action";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../selector";
import { State } from "../store";
import SearchInput from "./SearchInput";
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
      <div className="p-5 sm:p-10">
        <SearchInput
          placeholder="search"
          value={query}
          onChange={handleChange}
        />
        <ul className="space-y-3 mt-5">
          {shows.map((s) => (
            <ShowTile key={s.id} show={s} />
          ))}
        </ul>
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
  fetchShows: showListFetchAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));
