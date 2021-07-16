/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomePageContainer_viewer$ref: FragmentReference;
declare export opaque type HomePageContainer_viewer$fragmentType: HomePageContainer_viewer$ref;
export type HomePageContainer_viewer = {|
  +viewer: {|
    +avatarUrl: any,
    +url: any,
    +email: string,
  |},
  +$refType: HomePageContainer_viewer$ref,
|};
export type HomePageContainer_viewer$data = HomePageContainer_viewer;
export type HomePageContainer_viewer$key = {
  +$data?: HomePageContainer_viewer$data,
  +$fragmentRefs: HomePageContainer_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomePageContainer_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ef768641d872a072d1b4d29030466dd8';

module.exports = node;
