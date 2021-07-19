/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesListItem_repository = {
    readonly id: string;
    readonly name: string;
    readonly url: unknown;
    readonly collaborators: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly login: string;
            };
        } | null> | null;
    } | null;
    readonly owner: {
        readonly id: string;
        readonly login: string;
        readonly url: unknown;
        readonly avatarUrl: unknown;
    };
    readonly " $refType": "RepositoriesListItem_repository";
};
export type RepositoriesListItem_repository$data = RepositoriesListItem_repository;
export type RepositoriesListItem_repository$key = {
    readonly " $data"?: RepositoriesListItem_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoriesListItem_repository">;
};



const node: ReaderFragment = (function(){
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
(node as any).hash = 'ae427854feb5e8b157cf3f90c528010b';
export default node;
