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
                    <p className="legend"><a href="https://github.com/BrenniusXIV/forum007">Spectre: Forum 007</a></p>
                </div>
                <div>
                    <img src="images/oddjobs_demo.jpg" alt="OddJobs"/>
                    <p className="legend"><a href="https://github.com/markhamtrenton/Group-Project-1">OddJobs</a></p>
                </div>
                <div>
                    <img src="images/weatherdash_demo.jpg" alt="Weather Dashboard"/>
                    <p className="legend"><a href="https://github.com/BrenniusXIV/weather-dashboard">Weather Dashboard</a></p>
                </div>
                <div>
                    <img src="images/planner_demo.jpg" alt="Day Planner"/>
                    <p className="legend"><a href="https://github.com/BrenniusXIV/js-plan-your-day">Day Planner</a></p>
                </div>
                <div>
                    <img src="images/passwordgen_demo.jpg" alt="Password Generator"/>
                    <p className="legend"><a href="https://github.com/BrenniusXIV/js-password-generator">Password Generator</a></p>
                </div>
                <div>
                    <img src="images/stock_coming_soon.jpg" alt="Coming soon..."/>
                    <p className="legend"><a href="https://gitlab.com/taylor.holden/whatshouldweplay">What should we play? Coming soon...</a></p>
                </div>
            </Carousel>
        );
    }

    
}

export default Portfolio;