import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Card, Col } from "react-bootstrap";

export default function SingleStateView() {
  const [data, setData] = React.useState([]);
  const { value, setValue } = useContext(UserContext);

  let selectedState = JSON.stringify(value);
  console.log(selectedState);

  React.useEffect(() => {
    let url =
      "https://developer.nps.gov/api/v1/parks?stateCode=" +
      selectedState +
      "&limit=50&start=0&api_key=IJ1FjAb4SkwSyXOqFhyqxTM3xg66eDcMQoDjKS16";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((park, key) => {
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
