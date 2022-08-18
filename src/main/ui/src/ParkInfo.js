import React from 'react';
import './ParkInfo.css';
import ParkPicCarousel from './carousel.js';
import {Container} from "react-bootstrap";


const ParkInfo = () => {
return (
<body>
{/*park image carousel with 3 images*/}
<Container className="carousel-container">
<ParkPicCarousel />
</Container>

<Container className="park-description">
<p>Brief park description from API?</p>
</Container>


{/*header for the cards*/}
<Container className="learn-more-header">
<h2 className="font-weight-bold">Learn more about {"ParkName"}</h2>
</Container>

{/*cards of info*/}
<Container className="info-cards">
<div class="card-group">
  <div className="card">
    <div class="card text-white bg-dark mb-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
     alt="gps on phone" />
      <div class="card-body">
        <h5 class="card-title">Location</h5>
        <p class="card-text">Connect to API</p>
        <a href="#" class="btn btn-primary">Link to Map</a>
      </div>
  </div>
   </div>

  <div className="card">
    <div class="card text-white bg-dark mb-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
     alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Visit the Website</h5>
        <p class="card-text">Connect to API</p>
        <a href="#" class="btn btn-primary">ParkURL</a>
      </div>
    </div>
   </div>

  <div className="card">
      <div class="card text-white bg-dark mb-3">
      <img class="card-img-top" src="https://images.unsplash.com/photo-1602562775100-bdff2108c7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
       alt="safety cone" />
        <div class="card-body">
          <h5 class="card-title">Park Alerts</h5>
          <p class="card-text">Connect to API</p>
        </div>
      </div>
</div>

  <div className="card">
          <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
           alt="umbrellas" />
            <div class="card-body">
              <h5 class="card-title">Current Weather</h5>
              <p class="card-text">Connect to API</p>
            </div>
          </div>
               </div>
                    </div>

       </Container>

</body>




 )
 };

export default ParkInfo;