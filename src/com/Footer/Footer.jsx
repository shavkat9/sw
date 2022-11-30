import React from "react";
import './Footer.css';
import Birdj from '../images/img/b.png'
import Face from '../images/img/f.png'
import Instag from '../images/img/i.png'
import Glob from '../images/img/globus.png'

function Footer () {
    return (
        <div className="footer__body">
         <div className="footer__container">
          <div className="footer__section">
            <h2 className="footer">Sinauw</h2>
            <p>Any feedback or questions? <br /> Contact us on our social media</p>
            <img src={Birdj} alt="logo" />
            <img src={Face} alt="logo" />
            <img src={Instag} alt="logo" />
            <img className="footer__logo" src={Glob} alt="logo" />
        </div>
        <div className="footer__items">
            <ul>
                <span>Home</span>
                <li><a href="#">Course</a></li>
                <li><a href="#">Webinar</a></li>
            </ul>
        </div>
        <div className="footer__services">
            <ul>
            <span>Materials Update</span>
                <li><a href="#">Trusted Mentor</a></li>
                <li><a href="#">Free E-book</a></li>
                <li><a href="#">Meeting</a></li>
            </ul>
        </div>
        <div className="footer__info">
            <ul>
            <span>Terms & Conditions</span>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer__apps">
            <ul>
            <span>Google Play Store</span>
                <li><a href="#">App Store</a></li>
            </ul>
        </div>
       </div>
       <hr />
       <strong>Copyright C 2021 Sinauw. All RIghts Reserved</strong>
    </div>
    )
}
export default Footer;
