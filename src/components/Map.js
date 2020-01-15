import React from 'react'
import { Map as LeafletMap, TileLayer, Marker ,Popup} from 'react-leaflet';
import '../styles/Map.css';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

  render() {
    return (
      <LeafletMap
        center={[33.775620, -84.396286]}
        zoom={17}
        maxZoom={19}
        minZoom={0}
        // attributionControl={true}
        // zoomControl={true}
        // doubleClickZoom={true}
        // scrollWheelZoom={true}
        // dragging={true}
        // animate={true}
        // easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[33.775620, -84.396286]}>
          <Popup >   {/* Popup for any custom information. */}
            <p>(Name of the stop)</p>

          </Popup>



        </Marker>
      </LeafletMap>
    );
  }
}
export default Map;