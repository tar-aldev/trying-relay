/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePageContainer_viewer$ref = any;
export type AppHomePageQueryVariables = {||};
export type AppHomePageQueryResponse = {|
  +$fragmentRefs: HomePageContainer_viewer$ref
|};
export type AppHomePageQuery = {|
  variables: AppHomePageQueryVariables,
  response: AppHomePageQueryResponse,
|};
*/


/*
query AppHomePageQuery {
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
    "name": "AppHomePageQuery",
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
    "name": "AppHomePageQuery",
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
    "cacheID": "65d11b304a54c8f93a1bb2bfb5ddb9b9",
    "id": null,
    "metadata": {},
    "name": "AppHomePageQuery",
    "operationKind": "query",
    "text": "query AppHomePageQuery {\n  ...HomePageContainer_viewer\n}\n\nfragment HomePageContainer_viewer on Query {\n  viewer {\n    avatarUrl\n    url\n    email\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '5f5bf12833e3d2a214e06ab6006088af';

module.exports = node;
