import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Container } from "react-bootstrap";
import "./ParkInfo.css";
import ProfileHeroImage from "./ProfileHeroImage";
import ThingsToDoAccordion from "./ThingsToDoAccordion";
import VisitedParkSwitch from "./VisitedParkSwitch";

export default function ParkInfo() {
  const [parkInfo, setParkInfo] = useState([]);
  const { value, setValue } = useContext(UserContext);

  let parkCode = { value };
  useEffect(() => {
    //parkCode should change depending on user choice
    let url =
      "https://developer.nps.gov/api/v1/parks?parkCode=" +
      parkCode +
      "&api_key=IJ1FjAb4SkwSyXOqFhyqxTM3xg66eDcMQoDjKS16";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setParkInfo(json.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="overall-div">
      <ProfileHeroImage parkInfo={parkInfo} />
      <Container className="park-description">
        <div> {parkInfo.description} </div>
      </Container>
      <VisitedParkSwitch />

      <ThingsToDoAccordion parkCode={parkCode} parkInfo={parkInfo} />

      <Container className="cards-container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-50">
              <div className="card text-white mb-3 bg-dark">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="gps on phone"
                />
                <div className="card-body">
                  <h5 className="card-title">Location</h5>
                  <a href={parkInfo.directionsUrl} className="btn btn-success">
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-50">
              <div className="card text-white bg-dark mb-3">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt="umbrellas"
                />
                <div className="card-body">
                  <h5 className="card-title">Weather</h5>
                  <h6 className="card-text">{parkInfo.weatherInfo}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="learn-more-header">
          <a className="font-weight-bold" href={parkInfo?.url}>
            Learn more about {parkInfo?.fullName} on the NPS website.
          </a>
        </Container>
      </Container>
    </div>
  );
}
