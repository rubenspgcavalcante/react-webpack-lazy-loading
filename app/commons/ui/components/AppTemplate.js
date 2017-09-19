import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import basePath from 'commons/utils/basePath';

export default ({children}) => (
  <div>
    <nav>
      <Link to={basePath``} >Home</Link>&nbsp;
      <Link to={basePath`projects` }>Projects</Link>&nbsp;
      <Link to={basePath`contact`} >Contact</Link>&nbsp;
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);