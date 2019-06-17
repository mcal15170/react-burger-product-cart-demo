import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Person from "./person/Person";
import Counter from "./container/counter/Counter";
import HookDemo from "./container/functionComponent/HookDemo";
import Student from "./container/student/Student";
import Product from "./container/product/Product";
import Cart from "./container/product/Cart";
import "./AppRouter.css";


export default function AppRouter() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/">Person</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/hook">HookDemo</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li style={{float:'right'}}>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Route exact path="/" component={Person} />
        <Route path="/counter" component={Counter} />
        <Route path="/hook" component={HookDemo} />
        <Route path="/student" component={Student} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
    </Router>
  );
}

