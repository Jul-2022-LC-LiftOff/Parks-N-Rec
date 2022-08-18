import React from 'react';
import './ParkInfo.css';
import ParkPicCarousel from './carousel.js';
import {Container} from "react-bootstrap";


const ParkInfo = () => {
return (
<body>
{/*park image carousel with 3 images*/}
<Container>
<ParkPicCarousel />
</Container>



{/*header for the cards*/}

<div>
<h2 className="text-center font-weight-bold">Learn more about {"ParkName"}:</h2>
</div>

{/*cards of info*/}
<div class="card-group">
    <div class="card border-info mb-3">
      <div class="card-body">
        <h5 class="card-title">Location</h5>
        <p class="card-text">Connect to API</p>
        <a href="#" class="btn btn-light">Link to Map</a>
      </div>
    </div>


    <div class="card border-info mb-3">
      <div class="card-body">
        <h5 class="card-title">Visit the Website</h5>
        <p class="card-text">Connect to API</p>
        <a href="#" class="btn btn-primary">ParkURL</a>
      </div>
    </div>

      <div class="card border-info mb-3">
        <div class="card-body">
          <h5 class="card-title">Park Alerts</h5>
          <p class="card-text">Connect to API</p>
        </div>
      </div>

          <div class="card border-info mb-3">
            <div class="card-body">
              <h5 class="card-title">Current Weather</h5>
              <p class="card-text">Connect to API</p>
            </div>
          </div>
        </div>


</body>




 )
 };

export default ParkInfo;