/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoriesContainer_repositories$ref = any;
export type RespositoriesPageQueryVariables = {||};
export type RespositoriesPageQueryResponse = {|
  +$fragmentRefs: RepositoriesContainer_repositories$ref
|};
export type RespositoriesPageQuery = {|
  variables: RespositoriesPageQueryVariables,
  response: RespositoriesPageQueryResponse,
|};
*/


/*
query RespositoriesPageQuery {
  ...RepositoriesContainer_repositories
}

fragment RepositoriesContainer_repositories on Query {
  viewer {
    repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
      edges {
        node {
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
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v2 = {
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
    "name": "RespositoriesPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RepositoriesContainer_repositories"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RespositoriesPageQuery",
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
            "args": [
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
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v1/*: any*/),
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
                                  (v2/*: any*/),
                                  (v0/*: any*/)
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
                          (v0/*: any*/),
                          (v2/*: any*/),
                          (v1/*: any*/),
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3750efe931b3c272636f83d241eb5bcb",
    "id": null,
    "metadata": {},
    "name": "RespositoriesPageQuery",
    "operationKind": "query",
    "text": "query RespositoriesPageQuery {\n  ...RepositoriesContainer_repositories\n}\n\nfragment RepositoriesContainer_repositories on Query {\n  viewer {\n    repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {\n      edges {\n        node {\n          id\n          name\n          url\n          collaborators {\n            edges {\n              node {\n                login\n                id\n              }\n            }\n          }\n          owner {\n            __typename\n            id\n            login\n            url\n            avatarUrl\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e87a017f6f3840c776c0ce652bdc28b';

module.exports = node;
