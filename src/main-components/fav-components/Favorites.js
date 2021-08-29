import React from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Favorites.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Favorites extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          restaurants:[]
        }
    }


    getRestaurantsData = async ()=>{
      // const rootPath = constants.rootPath;
    let restaurants = await  axios.get(`${[process.env.REACT_APP_SERVER]}/restaurants`);
    restaurants.data.length > 0 ? this.setState({
      restaurants: restaurants.data
    }) : this.setState({
      restaurants: []
    })


      console.log('nnnnnnntg',this.state.restaurants);
    
    }

    
    async componentDidMount () {

    // Creates new map instance
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [ -0.118092, 51.509865],
      zoom: 12
    });

    // Creates new directions control instance
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    await this.getRestaurantsData();

    this.state.restaurants.map(restaurant => new mapboxgl.Marker({
      color: "#FFF555",
      draggable: true
      }).setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<p>${restaurant.name}</p>`))
      .addTo(map) )

    // const marker = new mapboxgl.Marker({
    //   color: "#FFF555",
    //   draggable: true
    //   }).setLngLat([-73.985664, 40.748514]).setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
    //   .addTo(map);

    // Integrates directions control with map
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle:true

      }));
     


      console.log('first',this.state.restaurants);
  }

    render(){

        return (
            <>
            <h2 style={{margin:"20px auto"}}>Restaurants </h2>
            <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />

            {/* <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {this.props.restaurants.map((restaurant, idx) => (
              <Restaurant restaurant={restaurant} key={idx} />
            ))}
          </Row> */}
          </>
        )
    }
}

export default Favorites;