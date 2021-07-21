import { FC } from "react";
import Header from "../Header/Header";
import { gql, useQuery } from "@apollo/client";

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
  const { data, loading, error } = useQuery(MAIN_LAYOUT_QUERY);
  // const { viewer } = useLazyLoadQuery<any>(MAIN_LAYOUT_QUERY, data);
  // const { router, match } = useRouter();

  // if (viewer?.login && !match.params.login) {
  //   router.push(`/${viewer.login}`);
  // }

  console.log({ data, loading });

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1 py-2">{children}</div>
    </div>
  );
};

export default MainLayout;
