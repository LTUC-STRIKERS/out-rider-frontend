import React from 'react';

import './MainCards.css';
import SubCard1 from './SubCard1';
// import cardImage1 from "../../images/subcard1.jpg"




class SubSection1 extends React.Component {
    render() {
        return (
       <div className='subsection'>
       <div className='imageAsBackground' ></div>
       <SubCard1/>
       
       
       </div>
        )
    }
}





export default SubSection1;