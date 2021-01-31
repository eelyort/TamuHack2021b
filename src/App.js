import React from 'react';

import RectFill from "./CustomComponents/RectFill/RectFill";

import Header from "./Header/Header.js";
import Timer from "./Timer/Timer.js";
import Map from "./Map/Map.js";
import Options from "./Options/Options.js";
import Leaderboards from "./Leaderboards/Leaderboards.js";
import {withScriptjs} from "react-google-maps";

import './App.css';
const MapLoader = withScriptjs(Map);
  
export default function App() {
    return (
        <div className="App">
            <Header/>
            <div id={'timer-div'}>
                <Timer/>
            </div>
            <div id={'map-div'}>
                <RectFill>
                    <MapLoader
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOn4IKOryQBul-tiLGCvsXEzAJGNKtX9Q"
                      loadingElement={<div style={{ height: `100%` }} />}
                    />
                </RectFill>
            </div>
            <div id={'options-div'}>
                <Options/>
            </div>
            <div id={'leaderboards-div'}>
                <Leaderboards/>
            </div>
        </div>
    );
}
