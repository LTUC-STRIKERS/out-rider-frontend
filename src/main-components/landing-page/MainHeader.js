import React from 'react';
import Header from '../../header-components/Header';

import './MainCards.css';
import SubCard1 from './SubCard1';
import logo from '../../images/logo2.png'
// import cardImage1 from "../../images/subcard1.jpg"




class Mainheader extends React.Component {
    render() {
        return (
       <div className='outerheader'>
           <img src={logo} style={{width:'160px',opacity:1,marginLeft:'1vh'}}></img>
       <div className='innerheader' >
       <Header getLocation={this.props.getLocation} />
       </div>
       
      
       
       
       </div>
        )
    }
}





export default Mainheader;