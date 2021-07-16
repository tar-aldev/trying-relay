/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RepositoriesList_repositories$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesContainer_repositories$ref: FragmentReference;
declare export opaque type RepositoriesContainer_repositories$fragmentType: RepositoriesContainer_repositories$ref;
export type RepositoriesContainer_repositories = {|
  +$fragmentRefs: RepositoriesList_repositories$ref,
  +$refType: RepositoriesContainer_repositories$ref,
|};
export type RepositoriesContainer_repositories$data = RepositoriesContainer_repositories;
export type RepositoriesContainer_repositories$key = {
  +$data?: RepositoriesContainer_repositories$data,
  +$fragmentRefs: RepositoriesContainer_repositories$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoriesContainer_repositories",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RepositoriesList_repositories"
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6ba61a6f89037729f74f8df992efc091';

module.exports = node;
