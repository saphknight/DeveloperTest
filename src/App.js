import React from 'react';
import logo from './Assets/logo.png';
import './App.css';
// import {COLORS} from "./Style/"
// import data from './Data/data';
import splash from './splash';
import selection from './selection';

import { Switch, Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <header>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={splash}></Route>
          <Route path="/selection/:id" component={selection}></Route>
        </Switch>
      </HashRouter>
    </header>
  )
}

export default App;
