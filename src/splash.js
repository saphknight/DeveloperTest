import React from 'react';
import logo from './Assets/logo.png';
import './App.css';
// import {COLORS} from "./Style/"
import data from './Data/data';
import { Link } from 'react-router-dom';


function splash() {
  const options = Object.values(data).map((div, idx) => {
    return <div className="level-div">
      <h3 class="level-header">
        {div.name}
      </h3>
      <div className="price-div">
        12 Month Subscription 
        <p className="price-p">
          ${div.price}
        </p>
      </div>
      <div id="certification">
        Includes Certificate of Completion
      </div>
      <div className="credits-div">
        <p className="credits">{div.credits.do} CME credits for DO</p>
        <p className="credits">{div.credits.pa} CME credits for PA </p>
        <p className="credits">{div.credits.nurse} CNE credits for Nurses</p>
        
      </div>
      <div className="selection-div">
        <Link to={`/selection/${idx + 1}`} className="splash-selection">Select</Link>
      </div>
    </div>
  })
  return (
    <div className="App">
      <header id="nav-bar">
        <img src={logo} id="logo" alt="logo"></img>
      </header>
      <h1 id="splash-header">
        Subscribe to Canopy Learn
      </h1>
      <div id="levels">
        {options}
      </div>
    </div>
  );
}

export default splash;
