/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommitsListPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    id: string;
};
export type CommitsListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"CommitsListFragment_commits">;
    } | null;
};
export type CommitsListPaginationQuery = {
    readonly response: CommitsListPaginationQueryResponse;
    readonly variables: CommitsListPaginationQueryVariables;
};



/*
query CommitsListPaginationQuery(
  $count: Int = 10
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...CommitsListFragment_commits_1G22uz
    id
  }
}

fragment CommitItemFragment_commit on CommitEdge {
  node {
    committedDate
    author {
      email
      name
    }
    message
    id
  }
}

fragment CommitsListFragment_commits_1G22uz on Commit {
  history(first: $count, after: $cursor) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      ...CommitItemFragment_commit
      node {
        __typename
        id
      }
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommitsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "CommitsListFragment_commits"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommitsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "CommitHistoryConnection",
                "kind": "LinkedField",
                "name": "history",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommitEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Commit",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "committedDate",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "GitActor",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "email",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "message",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SelectedBranchCommits_history",
                "kind": "LinkedHandle",
                "name": "history"
              }
            ],
            "type": "Commit",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "066d7034d87ba2cdcafc549c1213b8eb",
    "id": null,
    "metadata": {},
    "name": "CommitsListPaginationQuery",
    "operationKind": "query",
    "text": "query CommitsListPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CommitsListFragment_commits_1G22uz\n    id\n  }\n}\n\nfragment CommitItemFragment_commit on CommitEdge {\n  node {\n    committedDate\n    author {\n      email\n      name\n    }\n    message\n    id\n  }\n}\n\nfragment CommitsListFragment_commits_1G22uz on Commit {\n  history(first: $count, after: $cursor) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      ...CommitItemFragment_commit\n      node {\n        __typename\n        id\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '289d2704dfb787a78b444dad74ee9f63';
export default node;
