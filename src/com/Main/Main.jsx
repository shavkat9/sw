import React from "react";
import './Main.css'
import Imagess from '../images/img/imagess.png'

function  Main () {
    return (
        <div className="container">
            <div className="main__contents">
                <h1>What Do You Want to Learn?</h1>
                <p>Choose the right class as you need. Then enjoy studying.</p>
            </div>
            <div className="main__lines">
                <div className="main__line">
                    <img className="main__img" src={Imagess} alt="png" />
                </div>
            </div>
        </div>
    )
}
export default Main;