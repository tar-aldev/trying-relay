import BranchPage from "../../pages/BranchPage/BranchPage";
import HomePage from "../../pages/HomePage/HomePage";
import RepositoriesPage from "../../pages/RepositoriesPage/RepositoriesPage";
import RepositoryPage from "../../pages/RepositoryPage/RepositoryPage";
import MainLayout from "../layouts/MainLayout";

export const routesConfig = [
  {
    path: "/:login?",
    Component: MainLayout,
    children: [
      {
        path: "/repositories/:name/branches/:branchId",
        Component: BranchPage
      },
      {
        path: "/repositories/:name",
        Component: RepositoryPage
      },
      {
        path: "/repositories",
        Component: RepositoriesPage
      },
      {
        path: "/",
        exact: true,
        Component: HomePage
      }
    ]
  }
];

/* children: [
  {
    Component: HomePage,
    path: "/"
  }
  /* {
    path: "repositories",
    Component: RepositoriesPage
  },
  {
    path: "repositories/:name",
    Component: RepositoryPage
  },
  {
    path: "/branches/:branchId",
    Component: BranchPage
  } *
]
} */
