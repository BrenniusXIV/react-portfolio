import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';

class Portfolio extends Component {
    render () {
        return (
            <Carousel autoPlay>
                <div>
                    <img src="images/forum007-demo.jpg" alt="Spectre: Forum 007"/>
                    <p className="legend">Spectre: Forum 007</p>
                </div>
                <div>
                    <img src="images/oddjobs_demo.jpg" alt="OddJobs"/>
                    <p className="legend">OddJobs</p>
                </div>
                <div>
                    <img src="images/weatherdash_demo.jpg" alt="Weather Dashboard"/>
                    <p className="legend">Weather Dashboard</p>
                </div>
                <div>
                    <img src="images/planner_demo.jpg" alt="Day Planner"/>
                    <p className="legend">Day Planner</p>
                </div>
                <div>
                    <img src="images/passwordgen_demo.jpg" alt="Password Generator"/>
                    <p className="legend">Password Generator</p>
                </div>
                <div>
                    <img src="images/stock_coming_soon.jpg" alt="Coming soon..."/>
                    <p className="legend">What should we play? Coming soon...</p>
                </div>
            </Carousel>
        );
    }

    
}

export default Portfolio;