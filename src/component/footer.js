import React from 'react'


class Footer extends React.Component {
    render () {
        return (
            <div>
        <div className="flex-container2">
            <div>
                <a className="footerText" href="/">About</a>
            </div>
            <div>
                <a className="footerText" href="/">Sign in</a>
            </div>
            <div>
                <a className="footerText" href="/">Community</a>
            </div>  
            <div>
                <a className="footerText" href="/">Pricing</a>
            </div>
            <div>
                <a className="footerText2" href="/">Free trial</a>
            </div>
            <div>
                <a className="footerText" href="/">Updates</a>
            </div>
          </div>
          <div>
          <p style={{color: "grey", fontSize : "10px", marginTop: "2%"}}>2019. Terms - Privacy. By the teams behind Greenhouse.</p>
          </div>
          </div>
        )
    }
}

export default Footer;