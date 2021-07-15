/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SelectedBranchCommits_commits$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectedBranchInfo_branch$ref: FragmentReference;
declare export opaque type SelectedBranchInfo_branch$fragmentType: SelectedBranchInfo_branch$ref;
export type SelectedBranchInfo_branch = {|
  +name: string,
  +target: {|
    +$fragmentRefs: SelectedBranchCommits_commits$ref
  |},
  +$refType: SelectedBranchInfo_branch$ref,
|};
export type SelectedBranchInfo_branch$data = SelectedBranchInfo_branch;
export type SelectedBranchInfo_branch$key = {
  +$data?: SelectedBranchInfo_branch$data,
  +$fragmentRefs: SelectedBranchInfo_branch$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectedBranchInfo_branch",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "target",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SelectedBranchCommits_commits"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ref",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'fa000ec0d89b5cbc73d2ffe5f2b06636';

module.exports = node;
