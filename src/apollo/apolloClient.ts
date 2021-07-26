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
    // dataIdFromObject: (obj) => {
    //   return obj?.id ? (obj?.id as string) : obj.__typename;
    // },
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
        keyFields: [],
        fields: {
          refs: relayStylePagination(["query"])
        }
      }
    }
  }),
  link
});

export default client;
