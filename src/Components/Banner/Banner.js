import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1  from '../../Images/b1.jpg'
import image2  from '../../Images/b2.jpg'
import image3  from '../../Images/b3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {image3}
                        alt="Computer Gadegets"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Computer all Gadegets Table</h3>
                        <p  className='text-warning'>ThisTable is computer table</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3  className='text-warning'>All Display and I-pod</h3>
                        <p  className='text-warning'> Best display  High Quality.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {image1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3  className='text-warning'>Exceptional Monitor</h3>
                        <p  className='text-warning'>Quality Good and Resulation High.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;