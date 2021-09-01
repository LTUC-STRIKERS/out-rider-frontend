import React from 'react';

import './MainCards.css';
import SubSection1 from './SubSection1';
import SubSection2 from './Subsection2';
import SubSection3 from './SubSection3';
import SubSection4 from './Subsection4';





class MainSection extends React.Component {
    render() {
        return (
       <div className='mainsection'>
        
       <SubSection1/>
       <SubSection4/>
       <SubSection2/>
       <SubSection3/>
       
       </div>
        )
    }
}





export default MainSection;