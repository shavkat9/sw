import React from "react";
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Body () {
    return (
        <div className="body__container">
            <div className="body__session">
                <Container>
                <div className="ratio ratio-16x9">
                <iframe  src="https://www.youtube.com/embed/BYVZh5kqaFg" title="YouTube video" allowFullScreen></iframe>
               </div>
                </Container>
              <h2>Live Online Webinar</h2>
               <p>You can stream Webinar live on our apps. 
                Stay update on our Webinar, its Free!</p>
               
            </div>
        </div>
    )
}
export default Body;


