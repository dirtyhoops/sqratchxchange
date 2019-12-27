import React, { Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

// import the sass styling
import './styles/main.scss';

const App = () => (
  <Fragment>
    <Navbar />
    <Home />
  </Fragment>
);

export default App;
