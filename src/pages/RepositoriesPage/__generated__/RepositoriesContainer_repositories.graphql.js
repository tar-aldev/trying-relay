/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesContainer_repositories$ref: FragmentReference;
declare export opaque type RepositoriesContainer_repositories$fragmentType: RepositoriesContainer_repositories$ref;
export type RepositoriesContainer_repositories = {|
  +viewer: {|
    +repositories: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +url: any,
          +collaborators: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: {|
                +login: string
              |}
            |}>
          |},
          +owner: {|
            +id: string,
            +login: string,
            +url: any,
            +avatarUrl: any,
          |},
        |}
      |}>
    |}
  |},
  +$refType: RepositoriesContainer_repositories$ref,
|};
export type RepositoriesContainer_repositories$data = RepositoriesContainer_repositories;
export type RepositoriesContainer_repositories$key = {
  +$data?: RepositoriesContainer_repositories$data,
  +$fragmentRefs: RepositoriesContainer_repositories$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoriesContainer_repositories",
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
                                (v2/*: any*/)
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'edec154bef35de561a30dc2f4d794655';

module.exports = node;
