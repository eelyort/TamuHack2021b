import React from 'react';

import Header from "./Header/Header.js";
import Timer from "./Timer/Timer.js";
import Map from "./Map/Map.js";
import Options from "./Options/Options.js";
import Leaderboards from "./Leaderboards/Leaderboards.js";

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className={'timer-div'}>
                <Timer />
            </div>
            <div className={'map-div'}>
                <Map />
            </div>
            <div className={'options-div'}>
                <Options />
            </div>
            <div className={'leaderboards-div'}>
                <Leaderboards />
            </div>
        </div>
    );
}

export default App;
