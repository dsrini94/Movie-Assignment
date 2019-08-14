import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './views/homePage/homePage.jsx';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducers from './redux/reducers/allReducers.js';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={HomePage} />
      </Router>
    </Provider>
  );
}

export default App;
