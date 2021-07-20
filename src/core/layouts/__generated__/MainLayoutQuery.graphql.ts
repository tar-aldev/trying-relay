/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MainLayoutQueryVariables = {};
export type MainLayoutQueryResponse = {
    readonly viewer: {
        readonly login: string;
    };
};
export type MainLayoutQuery = {
    readonly response: MainLayoutQueryResponse;
    readonly variables: MainLayoutQueryVariables;
};



/*
query MainLayoutQuery {
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
    "name": "MainLayoutQuery",
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
    "name": "MainLayoutQuery",
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
    "cacheID": "78a6b5b93116e2b3dd5a31bbf0449b4a",
    "id": null,
    "metadata": {},
    "name": "MainLayoutQuery",
    "operationKind": "query",
    "text": "query MainLayoutQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '22f5f443de37ddad2d529146bf2bc960';
export default node;
