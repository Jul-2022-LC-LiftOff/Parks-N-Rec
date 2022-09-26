import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Card, Col } from "react-bootstrap";

export default function SingleStateView() {
  const [data, setData] = React.useState([]);
  const [selectState, setSelect] = useState("");
  const { value, setValue } = useContext(UserContext);

  let selectedState = JSON.stringify(value);

  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => console.log(error));
  }, [selectState]);

  if (data.length > 0) {
    data.filter((parkApi) => {
      return parkApi.states.match(data);
    });
  }

  function filterParkStates(park) {
    if (selectState === selectedState) {
      console.log(park);
      return park;
    }
    if (park.states.toLowerCase().includes(selectState.toLowerCase())) {
      return park;
    }
  }

  return (
    <div>
      {data
        .filter((park) => {
          return filterParkStates(park);
        })
        .map((park, key) => {
          return (
            <Col
              xs={true}
              sm={true}
              md={3}
              lg={3}
              className="d-inline-flex m-3 h-100"
              key={key}
            >
              <Card className="resultCard">
                <Card.Img
                  variant="top"
                  src={park.images[0].url}
                  href={park.url}
                />
                <Card.Body>
                  <p> {park.name} </p>
                  <p>{park.description}</p>
                  <a href={park.url}>Visit Park site</a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </div>
  );
}
