import React from 'react';
import './ParkInfo.css';
import Carousel from 'react-bootstrap/Carousel';

const ParkPicCarousel = () => {
return (
<Carousel>
 <Carousel.Item>
      <img className="carousel-image" src="https://images.unsplash.com/photo-1660735839163-a8dd64e6d23c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
       alt="First slide" />
       <Carousel.Caption>
       <h3 className="welcome-notice">Welcome to Beautiful {"ParkName"}</h3>
       </Carousel.Caption>
     </Carousel.Item>

 <Carousel.Item>
      <img className="carousel-image" src="https://images.unsplash.com/photo-1660723703135-23b5e7f7e960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60"
       alt="Second slide" />
       <Carousel.Caption>
       <h3 className="welcome-notice">Welcome to Beautiful {"ParkName"}</h3>
       </Carousel.Caption>
 </Carousel.Item>

 <Carousel.Item>
      <img className="carousel-image" src="https://images.unsplash.com/photo-1660637368799-a76cdfd68a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
       alt="Third slide" />
       <Carousel.Caption>
       <h3 className="welcome-notice">Welcome to Beautiful {"ParkName"}</h3>
       </Carousel.Caption>
 </Carousel.Item>
</Carousel>

)}

export default ParkPicCarousel;