import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import {
  showCastFetchAction,
  showFetchAction,
  showListFetchAction,
} from "../action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Show } from "../models/Show";
import {
  showEntitiesSelector,
  showLoadingSelector,
  showsSelector,
  showIdsSelector,
} from "../Selectors/showSelector";
import { State } from "../store";
import H1 from "./H1";
import { RiMovie2Line } from "react-icons/ri";
import { Actor } from "../models/Actor";
import { showActorsSelector } from "../Selectors/actorSelector";
import H3 from "./H3";
import { LinkWithQuery } from "./LinkWithQuery";

type ShowDetailProps = {
  show: Show;
  actors: Actor[];
  fetchShowList: (query: string) => void;
  fetchShow: (showId: number) => void;
  fetchShowCast: (showId: number) => void;
  loading: boolean;
  prevShowLink?: any;
  nextShowLink?: any;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  show,
  fetchShow,
  fetchShowCast,
  fetchShowList,
  params,
  search,
  loading,
  actors,
  nextShowLink,
  prevShowLink,
}) => {
  useEffect(() => {
    const showId = +params.showId;
    fetchShow(showId);
    fetchShowCast(showId);
  }, [params.showId]);

  useEffect(() => {
    const query = (search as any).get("q");
    if (!show && query) {
      fetchShowList(query);
    }
  }, []);
  return (
    <>
      <div className="h-10">
        {(!show || loading) && (
          <RiMovie2Line className="text-4xl text-gray-200 animate-spin" />
        )}
      </div>
      <div>
        {show && (
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-stretch cursor-pointer bg-gray-300 p-2 rounded-md">
              <div className=" w-32 sm:w-48 shrink-0">
                <img
                  className="w-full"
                  src={
                    show.image?.medium ||
                    "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                  }
                ></img>
              </div>
              <div className="flex flex-col">
                <div className="ml-2">
                  <H1 className="text-gray-700">{show.name}</H1>
                  <p
                    dangerouslySetInnerHTML={{ __html: show.summary }}
                    className="text-gray-700 "
                  ></p>
                </div>
                <div>
                  <H3>Cast</H3>
                  {actors && (
                    <ul>
                      {actors.map((a) => (
                        <li key={a.id}>{a.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between text-xl font-bold text-gray-200">
              {prevShowLink ? (
                <LinkWithQuery to={prevShowLink}>Prev Show</LinkWithQuery>
              ) : (
                <span></span>
              )}
              {nextShowLink ? (
                <LinkWithQuery to={nextShowLink}>Next Show</LinkWithQuery>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

ShowDetail.defaultProps = {};
const mapStateToProps = (s: State, props: any) => {
  const showId = +props.params.showId;
  const ids = showIdsSelector(s);
  let prev, next;
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    if (id === showId) {
      if (i + 1 < ids.length) {
        next = ids[i + 1];
      }
      if (i >= 1) {
        prev = ids[i - 1];
      }
      break;
    }
  }
  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
    actors: showActorsSelector(s)[showId],
    prevShowLink: prev && `/shows/${prev}`,
    nextShowLink: next && `/shows/${next}`,
  };
};
const mapDispatchToProps = {
  fetchShow: showFetchAction,
  fetchShowCast: showCastFetchAction,
  fetchShowList: showListFetchAction,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
