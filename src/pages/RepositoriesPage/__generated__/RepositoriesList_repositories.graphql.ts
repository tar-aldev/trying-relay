/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesList_repositories = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"RepositoriesListItem_repository">;
        } | null;
    } | null> | null;
    readonly " $refType": "RepositoriesList_repositories";
};
export type RepositoriesList_repositories$data = RepositoriesList_repositories;
export type RepositoriesList_repositories$key = {
    readonly " $data"?: RepositoriesList_repositories$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoriesList_repositories">;
};



const node: ReaderFragment = {
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
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
(node as any).hash = '96ff1b69ae702330310a356752d6f842';
export default node;
