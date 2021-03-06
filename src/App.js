import React from 'react';

import RectFill from "./CustomComponents/RectFill/RectFill";

import Header from "./Header/Header.js";
import Timer from "./Timer/Timer.js";
import Map from "./Map/Map.js";
import Options from "./Options/Options.js";
import Leaderboards from "./Leaderboards/Leaderboards.js";
import { withScriptjs } from "react-google-maps";
import deepEqual from 'deep-equal';

import { Button } from "@material-ui/core";
import Textinput from "./Textinput";

import './App.css';

import LocationMock from "./Mocks/FakeGetLocation";
const MapLoader = withScriptjs(Map);

// constants
const date = "2021-01-31";
// ms between timer updates
const msUpdateInterval = 1000;
// timer updates between checking flight data again
const updatesPerReFetch = 60;
const caloriesPerTime = 13.2 / 60;
const supportedGates = new Set(['H18', 'H12', 'G20', 'G5', 'E14', 'B2', 'C3', 'C32', 'B18', 'B7', 'B1', 'K1']);
// time
const timeToBathroom = 8 * 60;
const timeToFood = 12 * 60;
const timeToEatIn = 30 * 60;

async function validatePlaneNum(toValidate, setState) {
    fetch(`https://tamuhack-2021.uc.r.appspot.com/flights?date=${date}`)
        .then(response => response.json())
        .then(data => {
            data = data.filter((val) => supportedGates.has(val.gate.code));
            console.log(data);
            const correct = data.filter((val) => val.flightNumber === toValidate);

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
                        changed: !deepEqual(ans, oldState.info),
                    }
                }
            });
        });
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.locMock = new LocationMock();
        // call me to change map displayed values
        this.routeMe = null;

        // state
        this.state = {
            currentLocation: this.locMock.getNext(),
            currentLocationChanged: true,
            flightState: {
                info: null,
                selecting: true,
                validating: false,
                queuedNum: "",
                changed: false,
            },
            checkboxes: {
                bathroom: false,
                food: false,
                togo: false,
            },
            time: {
                timeTillTakeoff: -1,
                timeToGate: -1,
            },
            extraTime: 0,
        };

        this.setRouteMe = (val) => this.routeMe = val;
        this.setFlightState = (val) => this.setState((oldState) => ({ ...oldState, flightState: val(oldState.flightState) }));
        this.setCheckboxes = (val) => this.setState((oldState) => ({ ...oldState, checkboxes: val }));

        // periodic update interval
        this.updateInterval = null;
        this.numUpdates = 0;
        this.update = () => {
            if(!this.state.flightState.selecting) {
                this.setTimeTillTakeoff();
                if(this.state.flightState.changed || this.state.currentLocationChanged) {
                    this.setState((old) => ({...old, currentLocationChanged: false, flightState: {...old.flightState, changed: false}}));
                    this.setTimeToGate();
                }
                this.numUpdates++;
                if(this.numUpdates > updatesPerReFetch){
                    this.numUpdates = 0;
                    validatePlaneNum(this.state.flightState.info.flightNumber, (val) => this.setFlightState(val));
                }
            }
        };

        // location
        this.updateLocation = () => {
            this.setState((oldState) => ({ ...oldState, currentLocation: this.locMock.getNext(), currentLocationChanged: true, }));
        };

        // for getting date / time
        this.getFlightDepartureTimeUnix = () => {
            return new Date(this.state.flightState.info.departureTime);
        };
        // these both return nothing, setting the state
        this.setTimeTillTakeoff = () => {
            const ans = Math.floor((this.getFlightDepartureTimeUnix() - new Date()) / 1000);
            this.setState((oldState) => ({ ...oldState, time: { ...oldState.time, timeTillTakeoff: ans }, }));
        };
        // async
        this.setTimeToGate = () => {
            this.routeMe(this.state.currentLocation, this.state.flightState.info.gate.location, (ans) => {
                console.log(`routeMe ans: ${ans}`);

                this.setState((oldState) => ({ ...oldState, time: { ...oldState.time, timeToGate: ans } }));
            });
        };
    }
    render() {
        // get values from state
        const { flightState, checkboxes, time } = this.state;

        const content = (
            <div className={'content'}>
                <Header timeTillTakeoff={this.state.time.timeTillTakeoff} timeToGate={this.state.time.timeToGate + this.state.extraTime} getNextLoc={() => this.updateLocation()} />
                <div id={'timer-div'}>
                    <Timer timeTillTakeoff={this.state.time.timeTillTakeoff} timeToGate={this.state.time.timeToGate + this.state.extraTime} caloriesPerTime={caloriesPerTime} />
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
            </div>
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
                                    variant={'outlined'}
                                >
                                    Submit
                                </Button>
                                {/*<div className={'loading-div' + (flightState.validating ? ' show' : '')}>*/}
                                {/*    <CircularProgress variant={'indeterminate'} />*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
    componentDidMount() {
        this.updateInterval = setInterval(() => this.update(), msUpdateInterval);
    }
    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // for setting initial time values
        if(!this.state.flightState.selecting && this.state.time.timeTillTakeoff === -1 && this.state.time.timeToGate === -1) {
            this.setTimeTillTakeoff();
            this.setTimeToGate();
        }
        // extra time
        const options = this.state.checkboxes;
        const extraTime = (options.bathroom ? timeToBathroom : 0) + (options.togo ? timeToFood : 0) + (options.food ? timeToEatIn : 0);
        if(this.state.extraTime !== extraTime){
            this.setState((old) => ({...old, extraTime: extraTime}));
        }
    }
}