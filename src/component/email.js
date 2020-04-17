import React from 'react'
import lamp from '../assets/lamp.png'
import sun from '../assets/sun.png'
import planes from '../assets/planes.png';
import group from '../assets/Group.png';
import koper from '../assets/luggage.png';

class Email extends React.Component {
    render () {
        return (
        <div className="grid-container">
            <div className="lamp">
                <img src={lamp} height="400" alt="lamp" />
            </div>
            <div className="email">
                <h1>Email for Designer</h1>
                <p className="text"> Dynamic email tool for creators
                that doesn’t cost a leg. Works with
                Sketch, Figma and XD. Easily
                import your content and send with
                your favorite API.
                </p>
                <button className="btnTrial">Start free trial</button>
            </div>
            <div className="sun">
                <img src={sun} height="150" alt="sun" />
                <hr></hr>
                </div>  
            <div className="plane">
                <img src={planes} className="imgPlane2" alt="planes" />
            </div>
            <div className="koper">
                <img src={group} className="imgPlane" alt="group" />
            </div>
            <div className="koper1">
                <img src={koper} className="imgkoper" alt="koper" />
            </div>
          </div>
        )
    }
}

export default Email;