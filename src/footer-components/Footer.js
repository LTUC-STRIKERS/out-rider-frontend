import React from 'react';
import logo from '../images/logo2.png';
import './Footer.css';
import fbicon from '../images/fbicon.png';
import instaicon from '../images/instaicon.png';
import twiticon from '../images/twiticon.png';
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-1">
          <div className="footer-logo"><img src={logo} className="footer-img" /></div>
          <div className="location">
            <h3>contact by email</h3>
            <span>E-mail : <a href="mailto:outriderapp@gmail.com" >outriderapp@gmail.com</a> </span>
            <br />
            <h3>location</h3>     <div className="textwidget"><address>Jordan,Amman<br />
              phone: <a href="tel:+962 789974822"> +962 789974822 </a></address>
            </div>
          </div>
          <div className="social">
            <h3>get  in  touch  with  us  on  social  media!</h3>
            <a href=""><img src={fbicon} className="social-img" />  </a>
            <a href=""><img src={instaicon} className="social-img" />  </a>
            <a href=""> <img src={twiticon} className="social-img" />  </a>
          </div>
        </footer >
        <footer className="footer-2">
          <h3>Outrider  2021.  &copy; All  rights  reserved </h3>
        </footer>
      </>
    );
  }
}
export default Footer;