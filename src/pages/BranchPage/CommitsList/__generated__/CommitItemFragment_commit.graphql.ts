/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommitItemFragment_commit = {
    readonly node: {
        readonly committedDate: unknown;
        readonly author: {
            readonly email: string | null;
            readonly name: string | null;
        } | null;
        readonly message: string;
    } | null;
    readonly " $refType": "CommitItemFragment_commit";
};
export type CommitItemFragment_commit$data = CommitItemFragment_commit;
export type CommitItemFragment_commit$key = {
    readonly " $data"?: CommitItemFragment_commit$data;
    readonly " $fragmentRefs": FragmentRefs<"CommitItemFragment_commit">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommitItemFragment_commit",
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
          "kind": "ScalarField",
          "name": "committedDate",
          "storageKey": null
        },
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
  "type": "CommitEdge",
  "abstractKey": null
};
(node as any).hash = 'e412517d021b4fd8600046b884f1c0cd';
export default node;
