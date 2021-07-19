/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BranchInfo_branch = {
    readonly name: string;
    readonly repository: {
        readonly name: string;
        readonly owner: {
            readonly login: string;
        };
    };
    readonly " $refType": "BranchInfo_branch";
};
export type BranchInfo_branch$data = BranchInfo_branch;
export type BranchInfo_branch$key = {
    readonly " $data"?: BranchInfo_branch$data;
    readonly " $fragmentRefs": FragmentRefs<"BranchInfo_branch">;
};



const node: ReaderFragment = (function(){
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
  "name": "BranchInfo_branch",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "repository",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "owner",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "login",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ref",
  "abstractKey": null
};
})();
(node as any).hash = '02012d9e0c2dca84d610c24db71fafff';
export default node;
