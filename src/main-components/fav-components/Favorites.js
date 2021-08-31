import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Favorites.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Favorites extends React.Component {

  async componentDidMount() {
    
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.props.cityData.cityLocation.lon,	this.props.cityData.cityLocation.lat],
      zoom: 12
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
   
     await this.props.cityData.restaurants.map(restaurant =>  new mapboxgl.Marker({
        color: "#FFF555",
        draggable: true
      }).setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
        <h2>
        ${restaurant.name}
        <h2/>
        <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
        </div>`))
        .addTo(map))
     
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle: true
    }));
  }
  async componentDidUpdate (){
  
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.props.cityData.cityLocation.lon,	this.props.cityData.cityLocation.lat],
      zoom: 12
    });
    console.log('datdat',this.props.cityData);
    console.log(this.map,"wwwww");
    // Creates new directions control instance
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
   
      await this.props.cityData.restaurants.map(restaurant => new mapboxgl.Marker({
        color: "#FFF555",
        draggable: true
      }).setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
        <h2>
        ${restaurant.name}
        <h2/>
        <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
        </div>`))
        .addTo(map))
        
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle: true
    }));
  }
  render() {
    return (
      <>
        <h2 style={{ margin: "20px auto" }}>Restaurants </h2>
        <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
      </>
    )
  }
}
export default Favorites;
// 