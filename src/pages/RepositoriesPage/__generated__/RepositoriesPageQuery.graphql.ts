/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesPageQueryVariables = {};
export type RepositoriesPageQueryResponse = {
    readonly viewer: {
        readonly repositories: {
            readonly " $fragmentRefs": FragmentRefs<"RepositoriesList_repositories">;
        };
    };
};
export type RepositoriesPageQuery = {
    readonly response: RepositoriesPageQueryResponse;
    readonly variables: RepositoriesPageQueryVariables;
};



/*
query RepositoriesPageQuery {
  viewer {
    repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
      ...RepositoriesList_repositories
    }
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

fragment RepositoriesList_repositories on RepositoryConnection {
  edges {
    node {
      id
      ...RepositoriesListItem_repository
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoriesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RepositoriesList_repositories"
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RepositoriesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
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
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v2/*: any*/),
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
                                  (v3/*: any*/),
                                  (v1/*: any*/)
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          (v1/*: any*/),
                          (v3/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "avatarUrl",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "86d9489c98643300d01ea29021ece471",
    "id": null,
    "metadata": {},
    "name": "RepositoriesPageQuery",
    "operationKind": "query",
    "text": "query RepositoriesPageQuery {\n  viewer {\n    repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {\n      ...RepositoriesList_repositories\n    }\n    id\n  }\n}\n\nfragment RepositoriesListItem_repository on Repository {\n  id\n  name\n  url\n  collaborators {\n    edges {\n      node {\n        login\n        id\n      }\n    }\n  }\n  owner {\n    __typename\n    id\n    login\n    url\n    avatarUrl\n  }\n}\n\nfragment RepositoriesList_repositories on RepositoryConnection {\n  edges {\n    node {\n      id\n      ...RepositoriesListItem_repository\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a11457caa9a4f464f856f8beb9d4525f';
export default node;
