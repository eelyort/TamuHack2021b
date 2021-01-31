import React , { Component } from 'react';
import {  GoogleMap, DirectionsRenderer, withGoogleMap, withScriptjs, google} from 'react-google-maps';

const mapStyles = {
  width: '100%',
  height: '100%'
};
class Map extends Component {
    state = {
        directions: null
      };
    
      componentDidMount() {
        const directionsService = new window.google.maps.DirectionsService();
    
        const origin = { lat: 40.756795, lng: -73.954298 };
        const destination = { lat: 40.757895, lng: -73.954298 };
    
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.WALKING
          },
          (result, status) => {
            console.log("result:")
            console.log(result)
            console.log("status:")
            console.log(result.routes[0].legs[0].duration.text)
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
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

export default Map
