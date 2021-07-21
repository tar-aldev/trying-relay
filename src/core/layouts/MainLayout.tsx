import { FC, useEffect } from "react";
import Header from "../Header/Header";
import { gql, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";

export const MAIN_LAYOUT_QUERY = gql`
  query MainLayoutQuery {
    viewer {
      login
    }
  }
`;

// TODO: How to change this initial redirect to avoid warning?
// index.js:1 Warning: Cannot update a component (`ConnectedRouter`) while rendering a different component (`Auth`).
const MainLayout: FC = ({ children }) => {
  const { login } = useParams<{ login?: string }>();
  const { data, loading } = useQuery(MAIN_LAYOUT_QUERY, {
    skip: !!login
  });
  const history = useHistory();

  useEffect(() => {
    if (data?.viewer?.login && !login) {
      history.push(`/${data.viewer.login}`);
    }
  }, [history, data, login]);

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1 py-2">
        {loading ? <p>Loading current user...</p> : children}
      </div>
    </div>
  );
};

export default MainLayout;
