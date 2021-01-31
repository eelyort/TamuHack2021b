import logo from './logo.svg';
import './App.css';
import Map from "./Map/Map.js"
import { withScriptjs } from "react-google-maps";

function App() {
  const MapLoader = withScriptjs(Map);
  return (
    <div className="App">
      <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOn4IKOryQBul-tiLGCvsXEzAJGNKtX9Q"
      loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
