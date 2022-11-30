import React from "react";
import './Course.css';
import Png from '../images/img/png.png'


function Course () {
    return (
        <div className="course__container">
            <img className="course__png" src={Png} alt="png" />
            
        </div>

    )
}

export default Course;