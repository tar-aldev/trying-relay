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
    id
    name
  }
  refs(first: 100, refPrefix: "refs/heads/") {
    ...BranchesSearchableSelect_branches
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
v4 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
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
            "selections": (v4/*: any*/),
            "storageKey": null
          },
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
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "refs(first:100,refPrefix:\"refs/heads/\")"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef75568fdce90934d5823ed388468621",
    "id": null,
    "metadata": {},
    "name": "RepositoryPageQuery",
    "operationKind": "query",
    "text": "query RepositoryPageQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(name: $name, owner: $owner) {\n    ...RepositoryDetails_repository\n    id\n  }\n}\n\nfragment BranchesSearchableSelect_branches on RefConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment RepositoryDetails_repository on Repository {\n  name\n  descriptionHTML\n  defaultBranchRef {\n    id\n    name\n  }\n  refs(first: 100, refPrefix: \"refs/heads/\") {\n    ...BranchesSearchableSelect_branches\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9729eca7c314244586c98091682a8bf';

module.exports = node;
