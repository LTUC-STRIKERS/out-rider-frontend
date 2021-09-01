 import React from 'react';
 class CardProfileLinks extends React.Component {
    render() {
      const profileLinks = ['facebook','github', 'linkedin' ];
      const social = [this.props.member.memberFacebook,this.props.member.memberGithub,this.props.member.memberlinkedIn]
      const linksList = profileLinks.map((link, index) =>
        <li key={index}><a href={social[index]}><i className={'fa fa-' + link}></i></a></li>
      );
                                       
      return(
        <div className='card-social-links'>
          <ul className='social-links'>
            {linksList}
          </ul>
        </div>
      )
    }
  }

  
  // React component for the front side of the card
  class CardFront extends React.Component {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-6'>
                <img src={this.props.member.memberImage} style={{
              width: "100vw",
              height: "40vh",
              objectFit: "contain",
              maxHeight: "100vh",
            }} />
              </div>
  
              <div className='col-xs-6 side-front-content'>
              <h2>{this.props.member.memberName}</h2>
                <h1>{this.props.member.memberbackground}</h1>
               
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  // React component for the back side of the card
  class CardBack extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <CardProfileLinks member={this.props.member} />
          </div>
        </div>
      )
    }
  }
  
  // React component for the card (main component)
  class Card extends React.Component {
    render() {
      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack member={this.props.member} />
  
            <CardFront  member={this.props.member} />
          </div>
        </div>
      )
    }
  }

  export default Card;