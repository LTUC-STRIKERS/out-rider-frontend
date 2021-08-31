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
   
   
    const centerLongitude = this.props.cityData.cityLocation.lon?this.props.cityData.cityLocation.lon: 35.930359;
    const centerLatitude  = this.props.cityData.cityLocation.lat?this.props.cityData.cityLocation.lat:  31.963158;

    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [centerLongitude,centerLatitude],
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
    // await this.getRestaurantsData();
    const restaurants= this.props.cityData.restaurants?this.props.cityData.restaurants:[];
    if(restaurants.length !==0){
      restaurants.map(restaurant => new mapboxgl.Marker({
        color: "#FFF555",
        draggable: true
      }).setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
        <h2>
        ${restaurant.name}
        <h2/>
        <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
        </div>`))
        .addTo(map))
        ////////////////////////////
    } 
const favRestaurants = this.props.cityData.dataOfMyFav?this.props.cityData.dataOfMyFav:[];
if(favRestaurants.length !== 0){
  favRestaurants.map(restaurant => new mapboxgl.Marker({
    color: "#FF0000",
    draggable: true
  }).setLngLat([restaurant.longitude, restaurant.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
    <h2>
    ${restaurant.name}
    <h2/>
    <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
    </div>`))
    .addTo(map))
}


    // Integrates directions control with map
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle: true
    }));
    // console.log('first',this.state.restaurants);
  }
  componentDidUpdate(){
       
    const centerLongitude = this.props.cityData.cityLocation.lon?this.props.cityData.cityLocation.lon: 35.930359;
    const centerLatitude  = this.props.cityData.cityLocation.lat?this.props.cityData.cityLocation.lat:  31.963158;

    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [centerLongitude,centerLatitude],
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
    // await this.getRestaurantsData();
    const restaurants= this.props.cityData.restaurants?this.props.cityData.restaurants:[];
    if(restaurants.length !==0){
      restaurants.map(restaurant => new mapboxgl.Marker({
        color: "#FFF555",
        draggable: true
      }).setLngLat([restaurant.coordinates.longitude, restaurant.coordinates.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
        <h2>
        ${restaurant.name}
        <h2/>
        <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
        </div>`))
        .addTo(map))
        ////////////////////////////
    } 
const favRestaurants = this.props.cityData.dataOfMyFav?this.props.cityData.dataOfMyFav:[];
if(favRestaurants.length !== 0){
  favRestaurants.map(restaurant => new mapboxgl.Marker({
    color: "#FF0000",
    draggable: true
  }).setLngLat([restaurant.longitude, restaurant.latitude]).setPopup(new mapboxgl.Popup().setHTML(`<div>
    <h2>
    ${restaurant.name}
    <h2/>
    <img style="width:100%; height:100%" src=${restaurant.image_url} alt=${restaurant.name} title=${restaurant.name}/>
    </div>`))
    .addTo(map))
}


    // Integrates directions control with map
    map.addControl(directions, 'top-left');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle: true
    }));
    // console.log('first',this.state.restaurants);
  }
  render() {
    return (
      <>
        <h2 style={{ margin: "20px auto" }}>Restaurants </h2>
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
// 