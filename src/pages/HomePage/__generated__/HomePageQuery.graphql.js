/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePageContainer_repository$ref = any;
export type HomePageQueryVariables = {||};
export type HomePageQueryResponse = {|
  +$fragmentRefs: HomePageContainer_repository$ref
|};
export type HomePageQuery = {|
  variables: HomePageQueryVariables,
  response: HomePageQueryResponse,
|};
*/


/*
query HomePageQuery {
  ...HomePageContainer_repository
}

fragment HomePageContainer_repository on Query {
  repository(owner: "facebook", name: "relay") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "HomePageContainer_repository"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "relay"
          },
          {
            "kind": "Literal",
            "name": "owner",
            "value": "facebook"
          }
        ],
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "3b13edff5439f56edfc030920fdce868",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  ...HomePageContainer_repository\n}\n\nfragment HomePageContainer_repository on Query {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c29c9497138e3e6827fecc945bb909ef';

module.exports = node;
