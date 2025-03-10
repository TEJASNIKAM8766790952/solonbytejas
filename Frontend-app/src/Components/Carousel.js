import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const CustomCarousel = () => {
    return (
        <Carousel interval={1300}> {/* Set interval to 3000ms (3 seconds) */}
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="./image/salon6.jpg"
                    alt="Salon6jpg"
                    style={{width:"300px" , height:"650px"}}
                />
                <Carousel.Caption>
                    <h5>Welcome to Hair Envy Studio</h5>
                    <p className='bottomtag'>Your Beauty, Our Passion</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./image/GalleryImage2.jpg"
                    alt="Salon5"
                    style={{width:"300px" , height:"650px"}}
                />
                <Carousel.Caption>
                    <h5>Welcome to Hair Envy Studio</h5>
                    <p className='bottomtag'>Your Beauty, Our Passion</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./image/SalonShopImage.jpg"
                    alt="Salon9jpg"
                    style={{width:"300px" , height:"650px"}}
                />
                <Carousel.Caption>
                    <h5>Welcome to Hair Envy Studio</h5>
                    <p className='bottomtag'>Your Beauty, Our Passion</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;
