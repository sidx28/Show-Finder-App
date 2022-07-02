import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showFetchAction } from "../action";
import { withRouter, WithRouterProps } from "../hoc/withRouter";
import { Show } from "../models/Show";
import { showEntitiesSelector, showLoadingSelector } from "../selector";
import { State } from "../store";
import H1 from "./H1";
import { RiMovie2Line } from "react-icons/ri";

type ShowDetailProps = {
  show: Show;
  fetchShow: (showId: number) => void;
  loading: boolean;
} & WithRouterProps;

const ShowDetail: FC<ShowDetailProps> = ({
  show,
  fetchShow,
  params,
  loading,
}) => {
  useEffect(() => {
    fetchShow(+params.showId);
  }, []);

  return (
    <>
      <div className="h-10">
        {(!show || loading) && (
          <RiMovie2Line className="text-4xl text-gray-200 animate-spin" />
        )}
      </div>
      {show && (
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
          <div className="ml-2">
            <H1 className="text-gray-700">{show.name}</H1>
            <p
              dangerouslySetInnerHTML={{ __html: show.summary }}
              className="text-gray-700 "
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

ShowDetail.defaultProps = {};
const mapStateToProps = (s: State, props: any) => {
  const showId = +props.params.showId;
  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
  };
};
const mapDispatchToProps = {
  fetchShow: showFetchAction,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetail))
);
