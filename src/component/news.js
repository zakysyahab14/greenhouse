import React from 'react'
import group2 from '../assets/graph.png'

class News extends React.Component {
    render () {
        return (
            <div style={{marginTop: '100px'}}>
        <div className="grid-container2">
            <div className="item2">
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            <div className="item3"></div>  
            <div className="item4">
                <p className="text"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
            </div>
            <div className="item5">
            <img src={group2} className="imgGrp2" alt="lamp" />
            </div>
            <div className="item6">
                <img className="triangle-bottomright" alt="" />
            {/* <img src={group2} className="imgGrp2" alt="lamp" /> */}
            </div>
            <div className="item7">
            </div>
            <div className="item8">
                </div>  
        </div>
                </div>
        )
    }
}

export default News;