import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import Products from "./containers/products/Products";
import Signin from "./containers/signin/Signin";
import Signup from "./containers/signup/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { isUserLoggedIn } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Orders from "./containers/orders/Orders";

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
