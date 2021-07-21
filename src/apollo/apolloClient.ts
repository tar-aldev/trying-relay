import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
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
      FollowerConnection: {
        fields: {
          edges: {
            keyArgs: ["count", "after"],
            merge(existing = [], incoming) {
              console.log("MERGE");

              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  }),
  link
});

export default client;
