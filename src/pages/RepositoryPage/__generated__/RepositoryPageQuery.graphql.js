/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoryDetails_repository$ref = any;
export type RepositoryPageQueryVariables = {|
  name: string,
  owner: string,
|};
export type RepositoryPageQueryResponse = {|
  +repository: ?{|
    +$fragmentRefs: RepositoryDetails_repository$ref
  |}
|};
export type RepositoryPageQuery = {|
  variables: RepositoryPageQueryVariables,
  response: RepositoryPageQueryResponse,
|};
*/


/*
query RepositoryPageQuery(
  $name: String!
  $owner: String!
) {
  repository(name: $name, owner: $owner) {
    ...RepositoryDetails_repository
    id
  }
}

fragment BranchesSearchableSelect_branches on RefConnection {
  edges {
    node {
      id
      name
    }
  }
}

fragment RepositoryDetails_repository on Repository {
  name
  descriptionHTML
  defaultBranchRef {
    name
    id
  }
  refs(first: 100, refPrefix: "refs/heads/") {
    ...BranchesSearchableSelect_branches
  }
  ref(qualifiedName: "feature/auth") {
    ...SelectedBranchInfo_branch
    id
  }
}

fragment SelectedBranchCommits_commits on Commit {
  history(first: 100) {
    edges {
      node {
        author {
          email
          name
        }
        message
        id
      }
    }
  }
}

fragment SelectedBranchInfo_branch on Ref {
  name
  target {
    __typename
    ...SelectedBranchCommits_commits
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepositoryDetails_repository"
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
    "name": "RepositoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "descriptionHTML",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Ref",
            "kind": "LinkedField",
            "name": "defaultBranchRef",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v4/*: any*/),
              {
                "kind": "Literal",
                "name": "refPrefix",
                "value": "refs/heads/"
              }
            ],
            "concreteType": "RefConnection",
            "kind": "LinkedField",
            "name": "refs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RefEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Ref",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "refs(first:100,refPrefix:\"refs/heads/\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "qualifiedName",
                "value": "feature/auth"
              }
            ],
            "concreteType": "Ref",
            "kind": "LinkedField",
            "name": "ref",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          (v4/*: any*/)
                        ],
                        "concreteType": "CommitHistoryConnection",
                        "kind": "LinkedField",
                        "name": "history",
                        "plural": false,
                        "selections": [
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
                                "concreteType": "Commit",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
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
                                      (v2/*: any*/)
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
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "history(first:100)"
                      }
                    ],
                    "type": "Commit",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "ref(qualifiedName:\"feature/auth\")"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "980e5dd6f1e73510fcea1d6e1af43802",
    "id": null,
    "metadata": {},
    "name": "RepositoryPageQuery",
    "operationKind": "query",
    "text": "query RepositoryPageQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(name: $name, owner: $owner) {\n    ...RepositoryDetails_repository\n    id\n  }\n}\n\nfragment BranchesSearchableSelect_branches on RefConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment RepositoryDetails_repository on Repository {\n  name\n  descriptionHTML\n  defaultBranchRef {\n    name\n    id\n  }\n  refs(first: 100, refPrefix: \"refs/heads/\") {\n    ...BranchesSearchableSelect_branches\n  }\n  ref(qualifiedName: \"feature/auth\") {\n    ...SelectedBranchInfo_branch\n    id\n  }\n}\n\nfragment SelectedBranchCommits_commits on Commit {\n  history(first: 100) {\n    edges {\n      node {\n        author {\n          email\n          name\n        }\n        message\n        id\n      }\n    }\n  }\n}\n\nfragment SelectedBranchInfo_branch on Ref {\n  name\n  target {\n    __typename\n    ...SelectedBranchCommits_commits\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9729eca7c314244586c98091682a8bf';

module.exports = node;
