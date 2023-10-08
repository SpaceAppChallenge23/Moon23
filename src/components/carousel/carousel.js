import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

// Import the images to the file from assets
import Test_Moon from '../../assets/test_moon.jpg';
import Total_Solar_Eclipse from '../../assets/Total_Solar_Eclipse.png';
import anular_solar_eclipse from '../../assets/annular_solar_eclipse.png';
import partial_solar_eclipse from '../../assets/partial_solar_eclipse.png';


function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Set the height
  const desiredHeight = '360px'; 
  const desiredWidth = '600px';

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
      <Carousel.Item>
        <img
          src={Total_Solar_Eclipse}
          alt="First slide"
          style={{ height: desiredHeight, width: desiredWidth, objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Total Solar Eclipse</h3>
          <p> A total solar eclipse happens when the Moon passes between the Sun and Earth, completely blocking the face of the Sun. People located in the center of the Moon’s shadow when it hits Earth will experience a total eclipse.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={anular_solar_eclipse}
          alt="Second slide"
          style={{ height: desiredHeight, width: desiredWidth, objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Annular Solar Eclipse</h3>
          <p>An annular solar eclipse occurs when the Moon passes between the Sun and Earth, but it's at or near its farthest point from Earth. The Moon appears smaller than the Sun, resulting in a ring-like appearance, with the Moon as a dark disk against the Sun's bright disk.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={partial_solar_eclipse}
          alt="Third slide"
          style={{ height: desiredHeight, width: desiredWidth, objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Partial Solar Eclipse</h3>
          <p>
A partial solar eclipse occurs when the Sun, Moon, and Earth are not perfectly aligned, causing only a portion of the Sun to be covered, resulting in a crescent shape. Those outside the path of the Moon's inner shadow experience a partial solar eclipse during total or annular eclipses.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;

