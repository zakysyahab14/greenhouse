import React from 'react'
import lamp from '../assets/lamp.png'
import sun from '../assets/sun.png'
import planes from '../assets/planes.png';

class About extends React.Component {
    render () {
        return (
            <div id="About">
                <div className="grid-container" style={{borderTop: '3px solid red', paddingTop:'70px'}}>
                    <div className="lamp">
                        <img src={lamp} height="400" alt="lamp" />
                    </div>
                    <div className="about">
                        <h1>ABOUT</h1>
                        <p className="text"> 
                        KeDA Tech adalah perusahaan software house di Jakarta, Indonesia yang memenuhi kebutuhan klient berupa software, apps, ataupun website.
                        </p>
                    </div>
                    <div className="sun">
                        <img src={sun} height="150" alt="sun" />
                        <hr></hr>
                        </div>  
                    <div className="plane">
                        <img src={planes} className="imgPlane2" alt="planes" />
                    </div>
                    <div className="visi">
                    <h3>VISI</h3>
                        <p className="text"> 
                        Professional Global Software House 
                        </p>            
                    </div>
                    <div className="misi">
                        <h3>MISI</h3>
                        <p className="text"> 
                        Kami memberikan pelayanan serta program yang solid dan tepat waktu kepada klien.                </p>            
                    </div>
                </div>
            </div>
        
        )
    }
}

export default About;