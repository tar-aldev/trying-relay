/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CommitItemFragment_commit$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CommitsListFragment_commits$ref: FragmentReference;
declare export opaque type CommitsListFragment_commits$fragmentType: CommitsListFragment_commits$ref;
export type CommitsListFragment_commits = {|
  +history: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +$fragmentRefs: CommitItemFragment_commit$ref,
    |}>
  |},
  +id: string,
  +$refType: CommitsListFragment_commits$ref,
|};
export type CommitsListFragment_commits$data = CommitsListFragment_commits;
export type CommitsListFragment_commits$key = {
  +$data?: CommitsListFragment_commits$data,
  +$fragmentRefs: CommitsListFragment_commits$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "history"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./CommitsListPaginationQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "CommitsListFragment_commits",
  "selections": [
    {
      "alias": "history",
      "args": null,
      "concreteType": "CommitHistoryConnection",
      "kind": "LinkedField",
      "name": "__SelectedBranchCommits_history_connection",
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
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
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
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CommitItemFragment_commit"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
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
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '06767348817cacff452ed19cd862605b';

module.exports = node;
