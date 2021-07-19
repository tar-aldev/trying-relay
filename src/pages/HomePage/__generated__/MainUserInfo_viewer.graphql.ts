/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainUserInfo_viewer = {
    readonly name: string | null;
    readonly login: string;
    readonly avatarUrl: unknown;
    readonly url: unknown;
    readonly email: string;
    readonly " $refType": "MainUserInfo_viewer";
};
export type MainUserInfo_viewer$data = MainUserInfo_viewer;
export type MainUserInfo_viewer$key = {
    readonly " $data"?: MainUserInfo_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"MainUserInfo_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainUserInfo_viewer",
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
      "name": "login",
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
(node as any).hash = '4a1bc79c7b0e1df370af41d8dd854464';
export default node;
