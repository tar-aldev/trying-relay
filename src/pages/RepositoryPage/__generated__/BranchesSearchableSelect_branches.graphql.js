/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BranchesSearchableSelect_branches$ref: FragmentReference;
declare export opaque type BranchesSearchableSelect_branches$fragmentType: BranchesSearchableSelect_branches$ref;
export type BranchesSearchableSelect_branches = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +name: string,
    |}
  |}>,
  +$refType: BranchesSearchableSelect_branches$ref,
|};
export type BranchesSearchableSelect_branches$data = BranchesSearchableSelect_branches;
export type BranchesSearchableSelect_branches$key = {
  +$data?: BranchesSearchableSelect_branches$data,
  +$fragmentRefs: BranchesSearchableSelect_branches$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = 'c7d568650d70a41bbbe39c45c599d5d8';

module.exports = node;
