/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomePageContainer_viewer = {
    readonly name: string | null;
    readonly avatarUrl: unknown;
    readonly url: unknown;
    readonly email: string;
    readonly " $refType": "HomePageContainer_viewer";
};
export type HomePageContainer_viewer$data = HomePageContainer_viewer;
export type HomePageContainer_viewer$key = {
    readonly " $data"?: HomePageContainer_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"HomePageContainer_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomePageContainer_viewer",
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
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '5b7a323ee77c07342e8f8bfb6936b2af';
export default node;
