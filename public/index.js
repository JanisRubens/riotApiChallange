import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./javascripts/pages/Layout";
import Page_one from "./javascripts/pages/page_one";
import Page_two from "./javascripts/pages/page_two";
import Page_three from "./javascripts/pages/page_three";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
       <IndexRoute component={Page_one}></IndexRoute>
       <Route path="page_two" component={Page_two}></Route>
       <Route path="page_three" component={Page_three}></Route>
    </Route>
  </Router>,
app);
