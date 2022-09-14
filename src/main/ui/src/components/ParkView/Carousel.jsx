import {Carousel} from "react-bootstrap";
import parkInfo from "./ParkInfo.jsx";

<Carousel>

    {parkInfo.map((parks, key) => {
    return (
    <div key={key}> {parks.images.map((images, key) => {
return (<div key={key}>
          <img className="carousel-image" src={images.url} alt="slide" />
           <Carousel.Caption>
           <h3 className="welcome-notice">Welcome to Beautiful {parkName}</h3>
           </Carousel.Caption>
</div>

         )})}
   </div>
         )})}

                  </Carousel>