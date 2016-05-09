import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Page_one from "./pages/Page_one";
import Page_two from "./pages/Page_two";
import Page_three from "./pages/Page_three";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
       <IndexRoute component={Page_one}></IndexRoute>
       <Route path="page_two" component={Page_two}></Route>
       <Route path="page_three" component={Page_three}></Route>
    </Route>
  </Router>,
app);
