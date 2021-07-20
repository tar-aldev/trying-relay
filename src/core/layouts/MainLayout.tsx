import { graphql } from "babel-plugin-relay/macro";
import { useRouter } from "found";
import { Container } from "react-bootstrap";
import { useLazyLoadQuery } from "react-relay";
import Header from "../Header";

export const MAIN_LAYOUT_QUERY = graphql`
  query MainLayoutQuery {
    viewer {
      login
    }
  }
`;

// TODO: How to change this initial redirect to avoid warning?
// index.js:1 Warning: Cannot update a component (`ConnectedRouter`) while rendering a different component (`Auth`).
const MainLayout = ({ data, children }: any) => {
  const { viewer } = useLazyLoadQuery<any>(MAIN_LAYOUT_QUERY, data);
  const { router, match } = useRouter();

  if (viewer?.login && !match.params.login) {
    router.push(`/${viewer.login}`);
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <Container className="p-2 flex-grow-1">{children}</Container>
    </div>
  );
};

export default MainLayout;
