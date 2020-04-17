import React from 'react'
import group2 from '../assets/Group 2.png'
import furniture from '../assets/furniture.png'

class News extends React.Component {
    render () {
        return (
            <div>
        <div className="grid-container2">
            <div className="item2">
            <h4>Newsletter in minutes</h4>
                <p className="text"> Emails are traditionally
                painfully slow to work with.
                We’ve made a drag and drop
                tool that automatically fetches
                data and easily copy or send
                HTML using your favorite API.
                </p>
            </div>
            <div className="item3"></div>  
            <div className="item4">
            <h4>Works with XD, Figma and Sketch</h4>
                <p className="text"> Ever wanted to export your
                designs directly from your
                favorite design tool to your
                Email service? Now you can.
                From layers to HTML, to people's inbox.
                </p>
            </div>
            <div className="item5"></div>
            <div className="item6">
            <img src={group2} className="imgGrp2" alt="lamp" />
            </div>
            <div className="item7">
                <h4>So affordable. Small teams OK</h4>
                <p className="text"> Some email services cost
                    hundreds or thousands to send to
                    a not-so-large audience. We’ll
                    make sure you can stop worrying
                    bout costs and more about
                    sending your beautiful content!
                </p>
            </div>
            <div className="item8">
            <img src={furniture} className="imgFurni" alt="lamp" />
                </div>  
        </div>
                </div>
        )
    }
}

export default News;