import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default ({children}) => (
  <div>
    <nav>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/projects">Projects</Link>&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);