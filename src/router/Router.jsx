import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { RouterPage1 } from "../router/RouterPage1";
import { RouterPage2 } from "../router/RouterPage2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        render={({ match: { url } }) => (
          <Switch>
            {RouterPage1.map((route) => (
              <Route
                key={route.path}
                exact={route.expect}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/Page2"
        render={({ match: { url } }) => (
          <Switch>
            {RouterPage2.map((route) => (
              <Route
                key={route.path}
                exact={route.expect}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
