// Carousel.jsx
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'; // Import carousel.css

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="carousel-root">
                    <img src="public/2image.webp" alt="Image 2" className="carousel-image" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel-root">
                    <img src="public/3image.webp" alt="Image 3" className="carousel-image" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="carousel-root">
                    <img src="public/4image.webp" alt="Image 4" className="carousel-image" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;
