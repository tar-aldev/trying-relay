/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesListItem_repository$ref: FragmentReference;
declare export opaque type RepositoriesListItem_repository$fragmentType: RepositoriesListItem_repository$ref;
export type RepositoriesListItem_repository = {|
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
  +$refType: RepositoriesListItem_repository$ref,
|};
export type RepositoriesListItem_repository$data = RepositoriesListItem_repository;
export type RepositoriesListItem_repository$key = {
  +$data?: RepositoriesListItem_repository$data,
  +$fragmentRefs: RepositoriesListItem_repository$ref,
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
  "name": "RepositoriesListItem_repository",
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
  "type": "Repository",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae427854feb5e8b157cf3f90c528010b';

module.exports = node;
