import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

const link = createHttpLink({
  uri: "https://api.github.com/graphql",
  credentials: "same-origin",
  headers: {
    Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
    "Content-Type": "application/json"
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        fields: {
          followers: relayStylePagination()
        }
      },
      Commit: {
        fields: {
          history: relayStylePagination()
        }
      },
      Repository: {
        fields: {
          refs: relayStylePagination(["query", "queryString"])
        }
      }
    }
  }),
  link
});

export default client;
