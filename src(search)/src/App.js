import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "./config/routes";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.public.map((route) => (
            <Route key={route.key} {...route} />
          ))}
          <Redirect to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
