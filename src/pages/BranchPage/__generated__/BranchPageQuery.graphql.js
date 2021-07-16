/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CommitsListFragment_commits$ref = any;
export type BranchPageQueryVariables = {|
  id: string
|};
export type BranchPageQueryResponse = {|
  +node: ?{|
    +id: string,
    +name?: string,
    +target?: {|
      +$fragmentRefs: CommitsListFragment_commits$ref
    |},
  |}
|};
export type BranchPageQuery = {|
  variables: BranchPageQueryVariables,
  response: BranchPageQueryResponse,
|};
*/


/*
query BranchPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    id
    ... on Ref {
      name
      target {
        __typename
        ... on Commit {
          ...CommitsListFragment_commits
        }
        id
      }
    }
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

fragment CommitsListFragment_commits on Commit {
  history(first: 10) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BranchPageQuery",
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CommitsListFragment_commits"
                      }
                    ],
                    "type": "Commit",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Ref",
            "abstractKey": null
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
    "name": "BranchPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
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
                                      (v3/*: any*/)
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
                                  (v2/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "history(first:10)"
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
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
            ],
            "type": "Ref",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "be1cc1def987b8490d0de44ad9cc3002",
    "id": null,
    "metadata": {},
    "name": "BranchPageQuery",
    "operationKind": "query",
    "text": "query BranchPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    id\n    ... on Ref {\n      name\n      target {\n        __typename\n        ... on Commit {\n          ...CommitsListFragment_commits\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment CommitItemFragment_commit on CommitEdge {\n  node {\n    committedDate\n    author {\n      email\n      name\n    }\n    message\n    id\n  }\n}\n\nfragment CommitsListFragment_commits on Commit {\n  history(first: 10) {\n    totalCount\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      cursor\n      ...CommitItemFragment_commit\n      node {\n        __typename\n        id\n      }\n    }\n  }\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa2e1d186383201ceabf7c79e3d022e4';

module.exports = node;
