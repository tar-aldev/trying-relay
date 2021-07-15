/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectedBranchCommits_commits$ref: FragmentReference;
declare export opaque type SelectedBranchCommits_commits$fragmentType: SelectedBranchCommits_commits$ref;
export type SelectedBranchCommits_commits = {|
  +history: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +author: ?{|
          +email: ?string,
          +name: ?string,
        |},
        +message: string,
      |}
    |}>
  |},
  +$refType: SelectedBranchCommits_commits$ref,
|};
export type SelectedBranchCommits_commits$data = SelectedBranchCommits_commits;
export type SelectedBranchCommits_commits$key = {
  +$data?: SelectedBranchCommits_commits$data,
  +$fragmentRefs: SelectedBranchCommits_commits$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectedBranchCommits_commits",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "CommitHistoryConnection",
      "kind": "LinkedField",
      "name": "history",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommitEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
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
          "storageKey": null
        }
      ],
      "storageKey": "history(first:100)"
    }
  ],
  "type": "Commit",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '59314336d1fd9db4d1d6716dcf9674eb';

module.exports = node;
