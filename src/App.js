import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import ProductOverview from "./pages/ProductOverview";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/product-overview/:category">
            <ProductOverview />
          </Route>
          <Route exact path="/product-page">
            <ProductPage />
          </Route>
          <Route exact path="/product-page/:id">
            <ProductPage />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
