import React from 'react'


class Footer extends React.Component {
    render () {
        return (
            <div style={{backgroundColor:  'rgb(141, 255, 255)' }}>
        <div className="flex-container2">
            <div>
                <a className="footerText" href="#About">About</a>
            </div>
            <div>
            <a className="footerText" href="#Contact">Contact</a>
            </div>
            <div>
                <a className="footerText" href="#Pricing">Pricing</a>
            </div>  
            <div>
                <a className="footerText" href="#Nav">Login</a>
            </div>
          </div>
          <div>
          <p style={{color: "grey", fontSize : "10px", marginTop: "2%"}}>2020. Terms - Privacy. By the teams behind keDa-Tech.</p>
          </div>
          </div>
        )
    }
}

export default Footer;