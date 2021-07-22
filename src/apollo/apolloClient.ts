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
      }
      /* viewer: {
        fields: {
          followers: relayStylePagination()
        }
      } */
      /* Query: {
        fields: {
          viewer: {
            merge: true

          }
        }
      } */
      /* FollowerConnection: {
        fields: {
          edges: {
            keyArgs: false,
            merge(existing = [], incoming) {
              console.log("MERGE", existing, incoming);

              return [...existing, ...incoming];
            }
          }
        }
      } */
    }
  }),
  link
});

export default client;
