import React from 'react';
import './ParkInfo.css';
import {Container} from "react-bootstrap";


const ParkInfo = () => {
return (
<body>
<div>

{/*carousel of park images*/}

<div id="carouseExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
     <div className="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1660297423136-44b4c48c3c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" alt="First slide" />
     <div class="carousel-caption d-none d-md-block">
     <p class="welcome-notice">Welcome to Beautiful {"ParkName"}</p>
     </div>
    </div>
    <div className="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1660646542216-03970ba9ce03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Second slide" />
         <div class="carousel-caption d-none d-md-block">
         <p class="welcome-notice">Welcome to Beautiful {"ParkName"}</p>
         </div>
</div>
   <div className="carousel-item">
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1660678519362-2099db408451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Third slide" />
         <div class="carousel-caption d-none d-md-block">
         <p class="welcome-notice">Welcome to Beautiful {"ParkName"}</p>
         </div>
     </div>
  </div>
  <a class="carousel-control-prev" href="#carouseleExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


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

</div>
</body>




 )
 };

export default ParkInfo;