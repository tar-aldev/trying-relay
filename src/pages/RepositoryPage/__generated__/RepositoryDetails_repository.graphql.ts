/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoryDetails_repository = {
    readonly name: string;
    readonly descriptionHTML: unknown;
    readonly defaultBranchRef: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly refs: {
        readonly " $fragmentRefs": FragmentRefs<"BranchesSearchableSelect_branches">;
    } | null;
    readonly " $refType": "RepositoryDetails_repository";
};
export type RepositoryDetails_repository$data = RepositoryDetails_repository;
export type RepositoryDetails_repository$key = {
    readonly " $data"?: RepositoryDetails_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoryDetails_repository">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryDetails_repository",
  "selections": [
    (v0/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "BranchesSearchableSelect_branches"
        }
      ],
      "storageKey": "refs(first:100,refPrefix:\"refs/heads/\")"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();
(node as any).hash = '72bdd935269c511311f45208f95d8c27';
export default node;
