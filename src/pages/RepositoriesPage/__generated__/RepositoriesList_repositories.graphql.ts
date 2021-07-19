/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoriesList_repositories = {
    readonly repositories: {
        readonly totalCount: number;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
        };
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"RepositoriesListItem_repository">;
            } | null;
        } | null> | null;
    };
    readonly id: string;
    readonly " $refType": "RepositoriesList_repositories";
};
export type RepositoriesList_repositories$data = RepositoriesList_repositories;
export type RepositoriesList_repositories$key = {
    readonly " $data"?: RepositoriesList_repositories$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoriesList_repositories">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RepositoriesListPaginationQuery.graphql.ts'),
      "identifierField": "id"
    }
  },
  "name": "RepositoriesList_repositories",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "ASC",
            "field": "NAME"
          }
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__RepositoriesList_repositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RepositoriesListItem_repository"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__RepositoriesList_repositories_connection(orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = 'da2c1675840308f49ded01ed813aa631';
export default node;
