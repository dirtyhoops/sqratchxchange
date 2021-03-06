import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/home/HomePage';
import GalleryPage from './components/pages/gallerypage/GalleryPage';
import ItemPage from './components/pages/itempage/ItemPage';
import AddItemPage from './components/pages/additempage/AddItemPage';
import Footer from './components/layout/Footer';

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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gallery' component={GalleryPage} />
          <Route exact path='/gallery/:id' component={ItemPage} />
          <Route exact path='/admin/additem' component={AddItemPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
