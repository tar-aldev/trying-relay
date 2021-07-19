/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BranchesSearchableSelect_branches = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly name: string;
        } | null;
    } | null> | null;
    readonly " $refType": "BranchesSearchableSelect_branches";
};
export type BranchesSearchableSelect_branches$data = BranchesSearchableSelect_branches;
export type BranchesSearchableSelect_branches$key = {
    readonly " $data"?: BranchesSearchableSelect_branches$data;
    readonly " $fragmentRefs": FragmentRefs<"BranchesSearchableSelect_branches">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BranchesSearchableSelect_branches",
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RefConnection",
  "abstractKey": null
};
(node as any).hash = 'c7d568650d70a41bbbe39c45c599d5d8';
export default node;
