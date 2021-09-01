import React from 'react';
import MainCard from "./MainCard";
import MainSection from "./MainSection";
import "./MainCards.css"
import Header from '../../header-components/Header';
import SubSection4 from './Subsection4';
import Mainheader from './MainHeader';



class LandingPage extends React.Component {
    render() {
        return (
            <>
                <div className='overlay' >
                   
                    {/* <Header getLocation={this.props.getLocation} /> */}
                    {/* style={{backgroundimage:`url(${backgroundimage})`}} */}
                    <MainCard />

                </div>
                
                <MainSection />
            </>


        )
    }
}





export default LandingPage;