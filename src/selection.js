import React from 'react';
import data from './Data/data';
import logo from './Assets/logo.png'

function selection(prop) {
    console.log(prop);
    return (
        <div className="App">
            <header id="nav-bar">
                <img src={logo} id="logo" alt="logo"></img>
            </header>
            <div id="selected-sub">
                <h3 id="selection-header">
                    SELECTED SUBSCRIPTION
                </h3>
                <div id="sub-info">
                    <h2 id="sub-title">
                        {data[prop.match.params["id"]].name}
                    </h2>
                </div>
            </div>
        </div>
    )

}

export default selection;