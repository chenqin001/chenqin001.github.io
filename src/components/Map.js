import React from 'react'
import { Map as LeafletMap, TileLayer, Marker ,Popup} from 'react-leaflet';
import '../styles/Map.css';
import { Tooltip, Polygon } from 'leaflet';

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
        zoom={3}
        maxZoom={19}
        minZoom={0}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        id='map'
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />

    
        <Marker position={[33.775620, -84.396286]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Atlanta 🇺🇸</p>
          </Popup>
          
        </Marker>

        <Marker position={[31.2304, 121.4737]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Shanghai 🇨🇳</p>
            <p className="centered sub">上海</p>
          </Popup>
        </Marker>

        <Marker position={[39.9042, 116.4074]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Beijing 🇨🇳</p>
            <p className="centered sub">北京</p>
          </Popup>
        </Marker>


        <Marker position={[22.3193, 114.1694]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Hong Kong 🇨🇳</p>
            <p className="centered sub">香港</p>
          </Popup>
        </Marker>

        <Marker position={[40.9645, -76.8844]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Lewisburg 🇺🇸</p>
          </Popup>
        </Marker>

        <Marker position={[33.5902, 130.4017]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Fukuoka 🇯🇵</p>
            <p className="centered sub">福岡</p>
          </Popup>
        </Marker>

        <Marker position={[43.2203, 142.8635]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Hokkaido 🇯🇵</p>
            <p className="centered sub">北海道</p>
          </Popup>
        </Marker>

       
        <Marker position={[32.7503, 129.8779]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Nagasaki 🇯🇵</p>
            <p className="centered sub">長崎</p>
          </Popup>
        </Marker>

        <Marker position={[47.3769, 8.5417]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Zürich 🇨🇭</p>
          </Popup>
        </Marker>

        <Marker position={[46.2044, 6.1432]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Geneva 🇨🇭</p>
          </Popup>
        </Marker>
        
        
        

        <Marker position={[21.3069, -157.8583]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Hawaii 🇺🇸</p>
          </Popup>
        </Marker>

        <Marker position={[37.7749, -122.4194]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">San Francisco 🇺🇸</p>
          </Popup>
        </Marker>

        <Marker position={[40.7128, -74.0060]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">New York 🇺🇸</p>
          </Popup>
        </Marker>



        <Marker position={[39.9526, -75.1652]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Philadelphia 🇺🇸</p>
          </Popup>
        </Marker>

       

        <Marker position={[38.9072, -77.0369]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Washington DC 🇺🇸</p>
          </Popup>
        </Marker>

 
        <Marker position={[34.0522, -118.2437]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Los Angeles 🇺🇸</p>
          </Popup>
        </Marker>

        <Marker position={[47.6062, -122.3321]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Seattle 🇺🇸</p>
          </Popup>
        </Marker>

        <Marker position={[32.0809, -81.0912]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Savannah 🇺🇸</p>
          </Popup>
        </Marker>


        <Marker position={[48.8566, 2.3522]} opacity={0.8}>
          <Popup>   {/* Popup for any custom information. */}
            <p className="centered">Paris 🇫🇷</p>
          </Popup>
        </Marker>

        {/* <Polygon position={[45.51, -122.68]}></Polygon> */}

    
        {/* remaining */}
        
      </LeafletMap>
    );
  }
}
export default Map;