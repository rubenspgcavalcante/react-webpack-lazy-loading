import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppTemplate from './commons/ui/components/AppTemplate';
import AsyncComponent from './AsyncComponent';
import basePath from './commons/utils/basePath';

import "./style/app.scss";

const home = () => import(/* webpackChunkName: "home" */ './modules/home/index');
const projects = () => import(/* webpackChunkName: "projects" */ './modules/projects/index');
const contact = () => import(/* webpackChunkName: "contact" */ './modules/contact/index');

render(
  <Router>
    <AppTemplate>
      <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={home} />} />
      <Route path={basePath`projects`} exact={true} component={() => <AsyncComponent moduleProvider={projects} />} />
      <Route path={basePath`contact`} exact={true} component={() => <AsyncComponent moduleProvider={contact} />} />
    </AppTemplate>
   </Router>,
  document.getElementById("app")
);