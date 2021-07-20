/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type routesQueryVariables = {};
export type routesQueryResponse = {
    readonly viewer: {
        readonly login: string;
    };
};
export type routesQuery = {
    readonly response: routesQueryResponse;
    readonly variables: routesQueryVariables;
};



/*
query routesQuery {
  viewer {
    login
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "routesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "routesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    "cacheID": "e891fdc008d466429faf9c87303bbc57",
    "id": null,
    "metadata": {},
    "name": "routesQuery",
    "operationKind": "query",
    "text": "query routesQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '310748a88740750375712932a8311721';
export default node;
