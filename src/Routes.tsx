import * as React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Loading from "./components/Loading";

interface IRoute {
  name: string,
  path: string,
  component: React.ComponentType,
  exact?: boolean
}

export const routesConfig: IRoute[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: "home" */ './pages/home'))
  },
  {
    name: 'count',
    exact: true,
    path: "/count",
    component: React.lazy(() => import(/* webpackChunkName: "count" */ './pages/count'))
  },
  {
    name: 'use-toggle',
    exact: true,
    path: "/use-toggle",
    component: React.lazy(() => import(/* webpackChunkName: "use-toggle" */ './pages/useToggle'))
  }, 
  {
    name: 'use-hover',
    exact: true,
    path: '/use-hover',
    component: React.lazy(() => import(/* webpackChunkName: "use-hover" */ './pages/useHover'))
  },
  {
    name: 'use-modal',
    exact: true,
    path: '/use-modal',
    component: React.lazy(() => import(/* webpackChunkName: "use-modal" */ './pages/useModal'))
  },
  {
    name: 'use-fetch',
    exact: true,
    path: '/use-fetch',
    component: React.lazy(() => import(/* webpackChunkName: "use-fetch" */ './pages/useFetch'))
  }
];

export default () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          {routesConfig.map(({ name, path, component: Component, exact = true }: IRoute) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={
                () => {
                  document.title = name;
                  return <Component />
                }
              }
            />
          ))}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};
