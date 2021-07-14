/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePageContainer_viewer$ref = any;
export type HomePageQueryVariables = {||};
export type HomePageQueryResponse = {|
  +$fragmentRefs: HomePageContainer_viewer$ref
|};
export type HomePageQuery = {|
  variables: HomePageQueryVariables,
  response: HomePageQueryResponse,
|};
*/


/*
query HomePageQuery {
  ...HomePageContainer_viewer
}

fragment HomePageContainer_viewer on Query {
  viewer {
    avatarUrl
    url
    email
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
        "name": "HomePageContainer_viewer"
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
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          },
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a2ac2250758df1088e5bc7f9aad404e8",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  ...HomePageContainer_viewer\n}\n\nfragment HomePageContainer_viewer on Query {\n  viewer {\n    avatarUrl\n    url\n    email\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '9486b8777899b1007c9deedbb64f6124';

module.exports = node;
