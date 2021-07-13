/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomePageContainer_repository$ref: FragmentReference;
declare export opaque type HomePageContainer_repository$fragmentType: HomePageContainer_repository$ref;
export type HomePageContainer_repository = {|
  +repository: ?{|
    +name: string
  |},
  +$refType: HomePageContainer_repository$ref,
|};
export type HomePageContainer_repository$data = HomePageContainer_repository;
export type HomePageContainer_repository$key = {
  +$data?: HomePageContainer_repository$data,
  +$fragmentRefs: HomePageContainer_repository$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomePageContainer_repository",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "relay"
        },
        {
          "kind": "Literal",
          "name": "owner",
          "value": "facebook"
        }
      ],
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "repository",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c94f5ff1ca4ea0de87bb34cf3226bba8';

module.exports = node;
