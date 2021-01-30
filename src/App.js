import React from 'react';

import Header from "./Header/Header.js";
import Timer from "./Timer/Timer.js";
import Map from "./Map/Map.js";
import Options from "./Options/Options.js";
import Leaderboards from "./Leaderboards/Leaderboards.js";

import './App.css';
<<<<<<< HEAD

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
=======
import Container from '@material-ui/core/Container';
import Leaderboard from './Leaderboards/Leaderboards'
import Options from './Options/Options'
import Map from "./Map/Map.js"

function App() {
  return (
    <div className="App">
      <Map />
      <Options></Options>
      <Leaderboard></Leaderboard>
    </div>
  );
>>>>>>> 1e4ccf1 (integrate map)
}

export default App;
