import React from 'react'
import start from '../assets/start.png'


class Start extends React.Component {
    render () {
        return (
        <div className="flex-container">
            <div className="start">
                <img src={start} height="300" alt="start" />
            </div>
            <div className="trial">
                <h2>Start free trial</h2>
                <p className="text2"> So affordable you won’t believe it. Cancel anytime.
                </p>
                <button className="btnTrial2">Let me in!</button>
            </div>
          </div>
        )
    }
}

export default Start;