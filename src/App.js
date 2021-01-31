import React, { useState } from 'react';

import RectFill from "./CustomComponents/RectFill/RectFill";

import Header from "./Header/Header.js";
import Timer from "./Timer/Timer.js";
import Map from "./Map/Map.js";
import Options from "./Options/Options.js";
import Leaderboards from "./Leaderboards/Leaderboards.js";
import { withScriptjs } from "react-google-maps";

import { Button, CircularProgress } from "@material-ui/core";
import Textinput from "./Textinput";

import './App.css';

import LocationMock from "./Mocks/FakeGetLocation";
const MapLoader = withScriptjs(Map);

const date = "2020-01-30";

async function validatePlaneNum(toValidate, setState) {
    fetch(`https://tamuhack-2021.uc.r.appspot.com/flights?date=${date}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Trying to find number ${toValidate}`);
            console.log(data);
            const correct = data.filter((val) => val.flightNumber === toValidate);
            console.log(correct);

            // validate here
            let ans = correct.length ? correct[0] : null;

            // return data if validate, else null
            setState((oldState) => {
                if(oldState.queuedNum !== ""){
                    setTimeout(() => validatePlaneNum(oldState.queuedNum, setState), 0);
                    return {
                        ...oldState,
                        queuedNum: "",
                    }
                }
                else{
                    return {
                        info: ans,
                        selecting: oldState.selecting,
                        validating: false,
                        queuedNum: "",
                    }
                }
            });
        });
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.locMock = new LocationMock();
        this.routeMe = null;

        this.setRouteMe = (val) => this.routeMe = val;
        this.setFlightState = (val) => this.setState((oldState) => ({ ...oldState, flightState: val(oldState.flightState) }));
        this.setCheckboxes = (val) => this.setState((oldState) => ({ ...oldState, checkboxes: val }));

        this.state = {
            flightState: {
                info: null,
                selecting: true,
                validating: false,
                queuedNum: "",
            },
            checkboxes: {
                bathroom: false,
                food: false,
                togo: false,
            },
        }
    }
    render() {
        // get values from state
        const { flightState, checkboxes } = this.state;

        const content = (
            <>
                <Header />
                <div id={'timer-div'}>
                    <Timer />
                </div>
                <div id={'map-div'}>
                    <RectFill>
                        <MapLoader
                            setRouteMe={this.setRouteMe}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOn4IKOryQBul-tiLGCvsXEzAJGNKtX9Q"
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                    </RectFill>
                </div>
                <div id={'options-div'}>
                    <Options
                        state={checkboxes}
                        setState={this.setCheckboxes}
                    />
                </div>
                <div id={'leaderboards-div'}>
                    <Leaderboards />
                </div>
            </>
        );

        return (
            <div className="App">
                {(!flightState.selecting) ? content : (
                    <>
                        <div className={'blur-me'}>
                            {content}
                        </div>
                        <div className={'flight-number'}>
                            <Textinput
                                label={"Flight Number"}
                                variant={"outlined"}
                                tellChange={(e) => {
                                    if(flightState.validating) {
                                        this.setFlightState((oldS) => ({ ...oldS, queuedNum: e, }));
                                    }
                                    else {
                                        this.setFlightState((oldS) => ({ ...oldS, validating: true }));
                                        validatePlaneNum(e, this.setFlightState);
                                    }
                                }}
                            />
                            <div className={'submit-button'}>
                                <Button
                                    disabled={flightState.validating || !flightState.info}
                                    onClick={() => {
                                        if(flightState.validating || !flightState.info) {
                                            // nothing
                                        }
                                        else {
                                            this.setFlightState((old) => ({ ...old, selecting: false }));
                                        }
                                    }}
                                >
                                    Submit
                                </Button>
                                {(flightState.validating || !flightState.info) ? (
                                    <CircularProgress variant={'indeterminate'} />
                                ) : null}
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}