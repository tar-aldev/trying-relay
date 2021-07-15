/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RepositoriesListItem_repository$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesList_repositories$ref: FragmentReference;
declare export opaque type RepositoriesList_repositories$fragmentType: RepositoriesList_repositories$ref;
export type RepositoriesList_repositories = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: RepositoriesListItem_repository$ref
    |}
  |}>,
  +$refType: RepositoriesList_repositories$ref,
|};
export type RepositoriesList_repositories$data = RepositoriesList_repositories;
export type RepositoriesList_repositories$key = {
  +$data?: RepositoriesList_repositories$data,
  +$fragmentRefs: RepositoriesList_repositories$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoriesList_repositories",
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
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RepositoriesListItem_repository"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4e2f819dca11f0034a3eac4076dcb154';

module.exports = node;
