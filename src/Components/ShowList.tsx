import { ChangeEvent, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showListFetchAction } from "../action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../Selectors/showSelector";
import { State } from "../store";
import SearchInput from "./SearchInput";
import ShowTile from "./ShowTile";

type ShowListProps = {
  shows: Show[];
  fetchShow: (query: string) => void;
} & WithRouterProps;

const ShowList: FC<ShowListProps> = ({ shows, search, fetchShow }) => {
  const navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    navigate(`/shows?q=${event.target.value}`);
  };
  const query = search.get("q") || "";
  console.log(query.length);
  useEffect(() => {
    fetchShow(query);
  }, [query]);
  return (
    <>
      <div className="p-5 sm:p-10">
        <SearchInput
          placeholder="search"
          value={query}
          onChange={handleChange}
        />
        {query && (
          <ul className="space-y-3 mt-5">
            {shows.map((s) => (
              <ShowTile key={s.id} show={s} />
            ))}
          </ul>
        )}
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
  fetchShow: showListFetchAction,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowList))
);
