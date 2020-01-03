import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/home/HomePage';
import GalleryPage from './components/pages/gallerypage/GalleryPage';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// import the sass styling
import './styles/main.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/gallery' component={GalleryPage} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
