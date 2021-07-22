import { ObservableQueryFields } from "@apollo/client";

export interface PropsWithFetchMore<Query, QueryVariables> {
  fetchMore: ObservableQueryFields<Query, QueryVariables>["fetchMore"];
}
