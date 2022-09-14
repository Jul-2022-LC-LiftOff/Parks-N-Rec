import React, {Component} from 'react';
import './ParkInfo.css';
import {Container} from 'react-bootstrap';
import {Header} from '../Header/Header.jsx';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import AddNote from '../Notes/AddNote.jsx';




export default function ParkInfo() {

const [parkInfo, setParkInfo] = React.useState([]);

React.useEffect(() => {
//parkCode should change depending on user choice
let parkCode="yell"
let url = "https://developer.nps.gov/api/v1/parks?parkCode="+parkCode+"&api_key=IJ1FjAb4SkwSyXOqFhyqxTM3xg66eDcMQoDjKS16";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setParkInfo(json.data);
      })
      .catch((error) => console.log(error));
  }, []);

const parkName = parkInfo.map((parks, key) => {
return (
<div key={key}> {parks.fullName} </div>
)})

const parkDescription = parkInfo.map((parks, key) => {
return (
<div key={key}> {parks.description}</div>
)})

const parkWeather = parkInfo.map((parks, key) => {
return (
<div key={key}> {parks.weatherInfo}</div>)})

const parkDirectionsUrl = parkInfo.map((parks, key) => {
return (
<div key={key}> {parks.directionsUrl}</div>)})

const parkWebsite = parkInfo.map((parks, key) => {
return (
<div key={key}> {parks.url}</div>)})

return (
<div>
<Header />

<Container className="carousel-container">
<Carousel>
<Carousel.Item>
    {parkInfo.map((parks, key) => {
    return (
    <div key={key}> {parks.images.map((images, key) => {
return (<div>
          <img className="carousel-image" src={images.url} alt="slide" />
           <Carousel.Caption>
           <h3 className="welcome-notice">Welcome to Beautiful {parkName}</h3>
           </Carousel.Caption>
</div>
         )})}
   </div>
         )})}
</Carousel.Item>
                  </Carousel>
</Container>

<Container className="park-description">
<div> {parkDescription} </div>
</Container>

    <Container className="visited-checkbox">
    <p> Have you been to {parkName}?</p>
    <Button variant="outline-success" size="lg">Visited</Button>
    </Container>

<Container className="learn-more-header">
<h2 className="font-weight-bold">Learn more about {parkName}</h2>
</Container>

<Container>
<div className="row row-cols-1 row-cols-md-4 g-4">
<div className="col">
  <div className="card h-50">
    <div className="card text-white mb-3 bg-dark">
    <img className="img-fluid" src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
     alt="gps on phone" />
      <div className="card-body">
        <h5 className="card-title">Location</h5>
        <a href={parkDirectionsUrl} className="btn btn-success">Directions</a>
      </div>
  </div>
   </div>
     </div>

 <div className="col">
  <div className="card h-50">
    <div className="card text-white bg-dark mb-3">
    <img className="img-fluid" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
     alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Visit the Website</h5>
        <a href={parkWebsite} className="btn btn-success">Official Website</a>
      </div>
    </div>
   </div>
   </div>

 <div className="col">
  <div className="card h-50">
      <div className="card text-white bg-dark mb-3">
      <img className="img-fluid" src="https://images.unsplash.com/photo-1602562775100-bdff2108c7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
       alt="safety cone" />
        <div className="card-body">
          <h5 className="card-title">Park Alerts</h5>
          <h6 className="card-text">Choose something, alerts not included in API</h6>
        </div>
      </div>
</div>
   </div>

 <div className="col">
  <div className="card h-50">
          <div className="card text-white bg-dark mb-3">
          <img className="img-fluid" src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
           alt="umbrellas" />
            <div className="card-body">
              <h5 className="card-title">Weather</h5>
              <h6 className="card-text">{parkWeather}</h6>
            </div>
          </div>
               </div>
</div>
   </div>
</Container>

   <Container>
   <AddNote/>
   </Container>
   </div>


)}