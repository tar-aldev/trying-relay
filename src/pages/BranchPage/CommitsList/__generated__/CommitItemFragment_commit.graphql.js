/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CommitItemFragment_commit$ref: FragmentReference;
declare export opaque type CommitItemFragment_commit$fragmentType: CommitItemFragment_commit$ref;
export type CommitItemFragment_commit = {|
  +node: ?{|
    +author: ?{|
      +email: ?string,
      +name: ?string,
    |},
    +message: string,
  |},
  +$refType: CommitItemFragment_commit$ref,
|};
export type CommitItemFragment_commit$data = CommitItemFragment_commit;
export type CommitItemFragment_commit$key = {
  +$data?: CommitItemFragment_commit$data,
  +$fragmentRefs: CommitItemFragment_commit$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommitItemFragment_commit",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Commit",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "GitActor",
          "kind": "LinkedField",
          "name": "author",
          "plural": false,
          "selections": [
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
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CommitEdge",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '800da3b63ab2461285ba811144bc591a';

module.exports = node;
