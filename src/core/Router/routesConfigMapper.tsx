import { Route, Switch } from "react-router-dom";

export const getRoutesGroup = (
  { Component, children, path: parentPath, exact }: any,
  index: number | string
) => {
  if (children && children.length > 0) {
    return (
      <Route path={parentPath} key={Component.name} exact={exact}>
        <Component>
          <Switch>
            {children.map(
              (
                { path: nestedRoutePath, ...rest }: any,
                nestedIndex: number
              ) => {
                const path =
                  nestedRoutePath === "/"
                    ? parentPath
                    : `${parentPath}${nestedRoutePath}`;

                return getRoutesGroup(
                  { ...rest, path },
                  `${index}-${nestedIndex}`
                );
              }
            )}
          </Switch>
        </Component>
      </Route>
    );
  }

  return (
    <Route path={parentPath} key={Component.name} exact={exact}>
      <Component />
    </Route>
  );
};
