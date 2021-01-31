import React , { Component } from 'react';
import {  GoogleMap, DirectionsRenderer, withGoogleMap, withScriptjs, google} from 'react-google-maps';

const mapStyles = {
  width: '100%',
  height: '100%'
};
class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: null
    };

    // for use in routeMe
    this.directionsService = new window.google.maps.DirectionsService();

    // bind functions
    this.routeMe = this.routeMe.bind(this);
    this.routeMeCallback = this.routeMeCallback.bind(this);
  }
  // specs:
  //  startLocation: map { lat | latitude: NUMBER, lng | long | longitude: NUMBER }
  //  endLocation: map { lat | latitude: NUMBER, lng | long | longitude: NUMBER }
  //  callback: (time) => ???
  //    if you (some other class) needs the time, make this "(time) => setState(...)" or something
  //  examples:
  //    routeMe({latitude: 0.1, long: 0.1}, {lat: 2, lng: -2})
  //      makes the map display the path from [0.1, 0.1] to [2, -2]
  routeMe(startLocation, endLocation, callback = (time) => null) {
    console.log("RouteMe called: start, end:");
    console.log(startLocation);
    console.log(endLocation);

    const origin = {
      lat: startLocation.lat ?? startLocation.latitude ?? 0,
      lng: startLocation.lng ?? startLocation.long ?? startLocation.longitude ?? 0,
    };
    const destination = {
      lat: endLocation.lat ?? endLocation.latitude ?? 0,
      lng: endLocation.lng ?? endLocation.long ?? endLocation.longitude ?? 0,
    };
    const requestJSON = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.WALKING,
    };

    this.directionsService.route({...requestJSON}, this.routeMeCallback(callback));
  }
  // helper function for above
  routeMeCallback(agentCallback) {
    return ((result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
          console.log(result);
        this.setState({
          directions: result
        });
        agentCallback(result.routes[0].legs[0].duration.value);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
    
  componentDidMount() {
    // const directionsService = new window.google.maps.DirectionsService();
    this.props.setRouteMe((val1, val2, val3) => this.routeMe(val1, val2, val3));

    const origin = { lat: 40.756795, lng: -73.954298 };
    const destination = { lat: 40.857895, lng: -73.954298 };

    this.routeMe(origin, destination, (val) => console.log(`Default routeMe returning ${val} seconds`));

    // directionsService.route(
    //   {
    //     origin: origin,
    //     destination: destination,
    //     travelMode: window.google.maps.TravelMode.WALKING
    //   },
    //   (result, status) => {
    //     console.log("result:")
    //     console.log(result)
    //     console.log("status:")
    //     console.log(result.routes[0].legs[0].duration.value)
    //     if (status === window.google.maps.DirectionsStatus.OK) {
    //       this.setState({
    //         directions: result
    //       });
    //     } else {
    //       console.error(`error fetching directions ${result}`);
    //     }
    //   }
    // );
  }

    render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
/*
<Map
    google={this.props.google}
    zoom={14}
    style={mapStyles}
    initialCenter={
    {
        lat: -1.2884,
        lng: 36.8233
    }
    }
/>
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAOn4IKOryQBul-tiLGCvsXEzAJGNKtX9Q'
  })(Map);
  */

export default React.memo(Map)
