import React from 'react';
import Card from 'react-bootstrap/Card';
import './MainCards.css';




class MainCard extends React.Component {
    render() {
        return (
            <div className='maincards'>
                <h1>
                    Outrider
                </h1>
                <p>We think of our Custemres as royalty. Let us check the city for you!</p>
                <a href="/aboutus">About us</a>
            </div>

        )
    }
}





export default MainCard;