/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BranchesSearchableSelect_branches$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoryDetails_repository$ref: FragmentReference;
declare export opaque type RepositoryDetails_repository$fragmentType: RepositoryDetails_repository$ref;
export type RepositoryDetails_repository = {|
  +name: string,
  +descriptionHTML: any,
  +defaultBranchRef: ?{|
    +id: string,
    +name: string,
  |},
  +refs: ?{|
    +$fragmentRefs: BranchesSearchableSelect_branches$ref
  |},
  +$refType: RepositoryDetails_repository$ref,
|};
export type RepositoryDetails_repository$data = RepositoryDetails_repository;
export type RepositoryDetails_repository$key = {
  +$data?: RepositoryDetails_repository$data,
  +$fragmentRefs: RepositoryDetails_repository$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
// prettier-ignore
(node/*: any*/).hash = '72bdd935269c511311f45208f95d8c27';

module.exports = node;
