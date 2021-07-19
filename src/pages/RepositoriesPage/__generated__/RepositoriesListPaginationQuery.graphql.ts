/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesListPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    id: string;
};
export type RepositoriesListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"RepositoriesList_repositories">;
    } | null;
};
export type RepositoriesListPaginationQuery = {
    readonly response: RepositoriesListPaginationQueryResponse;
    readonly variables: RepositoriesListPaginationQueryVariables;
};



/*
query RepositoriesListPaginationQuery(
  $count: Int = 10
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...RepositoriesList_repositories_1G22uz
    id
  }
}

fragment RepositoriesListItem_repository on Repository {
  id
  name
  url
  collaborators {
    edges {
      node {
        login
        id
      }
    }
  }
  owner {
    __typename
    id
    login
    url
    avatarUrl
  }
}

fragment RepositoriesList_repositories_1G22uz on User {
  repositories(first: $count, after: $cursor, orderBy: {field: NAME, direction: ASC}) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...RepositoriesListItem_repository
        __typename
      }
      cursor
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
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoriesListPaginationQuery",
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
            "name": "RepositoriesList_repositories"
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
    "name": "RepositoriesListPaginationQuery",
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
                "concreteType": "RepositoryConnection",
                "kind": "LinkedField",
                "name": "repositories",
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
                    "concreteType": "RepositoryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "RepositoryCollaboratorConnection",
                            "kind": "LinkedField",
                            "name": "collaborators",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RepositoryCollaboratorEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      (v3/*: any*/)
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
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v6/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatarUrl",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
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
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "RepositoriesList_repositories",
                "kind": "LinkedHandle",
                "name": "repositories"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e2a965ad87c14c22d1069d254be53ec",
    "id": null,
    "metadata": {},
    "name": "RepositoriesListPaginationQuery",
    "operationKind": "query",
    "text": "query RepositoriesListPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RepositoriesList_repositories_1G22uz\n    id\n  }\n}\n\nfragment RepositoriesListItem_repository on Repository {\n  id\n  name\n  url\n  collaborators {\n    edges {\n      node {\n        login\n        id\n      }\n    }\n  }\n  owner {\n    __typename\n    id\n    login\n    url\n    avatarUrl\n  }\n}\n\nfragment RepositoriesList_repositories_1G22uz on User {\n  repositories(first: $count, after: $cursor, orderBy: {field: NAME, direction: ASC}) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...RepositoriesListItem_repository\n        __typename\n      }\n      cursor\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = 'da2c1675840308f49ded01ed813aa631';
export default node;
