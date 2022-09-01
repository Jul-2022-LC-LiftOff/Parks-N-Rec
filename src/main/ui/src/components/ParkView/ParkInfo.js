import React, {Component} from 'react';
import './ParkInfo.css';
import {Container} from 'react-bootstrap';
import {Header} from '../Header/Header.jsx';
import Carousel from 'react-bootstrap/Carousel';
import useState from 'react';
import Button from 'react-bootstrap/Button';
import AddNote from '../Notes/AddNote.jsx';




class ParkInfo extends Component {
state = {
images: [   {
                     "credit": "NPS/Jim Peaco",
                     "altText": "Crowd watching Aurum Geyser erupt",
                     "title": "Aurum Geyser",
                     "id": 1789,
                     "caption": "Aurum Geyser Erupting",
                     "url": "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"
                   },
                   {
                     "credit": "NPS/Neal Herbert",
                     "altText": "Photo of bison in Lamar Valley",
                     "title": "Bison in Lamar Valley",
                     "id": 1792,
                     "caption": "Bison in Lamar Valley",
                     "url": "https://www.nps.gov/common/uploads/structured_data/3C7D34E6-1DD8-B71B-0BBB1C0F478318E2.jpg"
                   }],
url: "https://www.nps.gov/yell/index.htm",
weatherInfo: "Yellowstone's weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70F (25C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below zero, especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer.",
fullName: "Yellowstone National Park",
directionsInfo: "Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.",
directionsUrl: "https://www.nps.gov/yell/planyourvisit/directions.htm",
description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'"
};


render() {
return (
<div>
<Header />

    <Container className="carousel-container">
    <Carousel>
     <Carousel.Item>
          <img className="carousel-image" src={this.state.images[0].url} alt="First slide"/>
           <Carousel.Caption>
           <h3 className="welcome-notice">Welcome to Beautiful {this.state.fullName}</h3>
           </Carousel.Caption>
         </Carousel.Item>

     <Carousel.Item>
          <img className="carousel-image" src={this.state.images[1].url}
           alt="Second slide" />
           <Carousel.Caption>
           <h3 className="welcome-notice">Welcome to Beautiful {this.state.fullName}</h3>
           </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
          <img className="carousel-image" src={this.state.images[0].url}
           alt="Third slide" />
           <Carousel.Caption>
           <h3 className="welcome-notice">Welcome to Beautiful {this.state.fullName}</h3>
           </Carousel.Caption>
     </Carousel.Item>
    </Carousel>
    </Container>

<Container className="park-description">
<div>{this.state.description} </div>
</Container>

    <Container className="visited-checkbox">
    <p> Have you been to {this.state.fullName}?</p>
    <Button variant="outline-success" size="lg">Visited</Button>
    </Container>

<Container className="learn-more-header">
<h2 className="font-weight-bold">Learn more about {this.state.fullName}</h2>
</Container>



<div className="row row-cols-1 row-cols-md-4 g-4">
<div class="col">
  <div className="card h-50">
    <div class="card text-white mb-3 bg-dark">
    <img className="img-fluid" src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
     alt="gps on phone" />
      <div class="card-body">
        <h5 class="card-title">Location</h5>
        <a href={this.state.directionsUrl} class="btn btn-success">Directions</a>
      </div>
  </div>
   </div>
     </div>


 <div class="col">
  <div className="card h-50">
    <div class="card text-white bg-dark mb-3">
    <img className="img-fluid" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
     alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Visit the Website</h5>
        <a href={this.state.url} class="btn btn-success">Official Website</a>
      </div>
    </div>
   </div>
   </div>

 <div class="col">
  <div className="card h-50">
      <div class="card text-white bg-dark mb-3">
      <img className="img-fluid" src="https://images.unsplash.com/photo-1602562775100-bdff2108c7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
       alt="safety cone" />
        <div class="card-body">
          <h5 class="card-title">Park Alerts</h5>
          <h7 class="card-text">Connect to API</h7>
        </div>
      </div>
</div>
   </div>

 <div class="col">
  <div className="card h-50">
          <div class="card text-white bg-dark mb-3">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
           alt="umbrellas" />
            <div class="card-body">
              <h5 class="card-title">Weather</h5>
              <h7 class="card-text">{this.state.weatherInfo}</h7>
            </div>
          </div>
               </div>
</div>
   </div>

   <Container>
   <AddNote/>
   </Container>

</div>

)}
}


export default ParkInfo;