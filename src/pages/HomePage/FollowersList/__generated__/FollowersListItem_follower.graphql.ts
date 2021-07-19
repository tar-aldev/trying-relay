/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FollowersListItem_follower = {
    readonly node: {
        readonly email: string;
        readonly name: string | null;
        readonly login: string;
        readonly avatarUrl: unknown;
        readonly url: unknown;
        readonly createdAt: unknown;
    } | null;
    readonly " $refType": "FollowersListItem_follower";
};
export type FollowersListItem_follower$data = FollowersListItem_follower;
export type FollowersListItem_follower$key = {
    readonly " $data"?: FollowersListItem_follower$data;
    readonly " $fragmentRefs": FragmentRefs<"FollowersListItem_follower">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FollowersListItem_follower",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UserEdge",
  "abstractKey": null
};
(node as any).hash = 'f1d1ecf088c34b65198d34361429caa8';
export default node;
