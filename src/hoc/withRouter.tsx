import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
  search: ReturnType<typeof useSearchParams>[0];
}

export const withRouter = <T extends WithRouterProps>(
  Component: React.ComponentType<T>
) => {
  return (props: Omit<T, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const [search] = useSearchParams();

    return (
      <Component
        {...(props as T)}
        location={location}
        params={params}
        navigate={navigate}
        search={search}
      />
    );
  };
};
