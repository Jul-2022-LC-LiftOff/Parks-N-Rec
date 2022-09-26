import { Card, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";


export default function ParkCard() {
    const [searchParkCode,setParkCode] = useState({})
    const [park, setPark] = React.useState([]);
	React.useEffect(() => {
		let url = `https://developer.nps.gov/api/v1/parks?parkCode="all"&limit=469&api_key=JMZizGv6gAcjBzoD4TbqW9RQSe9K8fEt9Cdb2Zta`;
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setPark(json.park);
			})
			.catch((error) => console.log(error));
	}, []);

    function handleClick(){
        setParkCode(park.parkCode)
    }

    return(
        <div>
					return (
						<Col
							xs={true}
							sm={true}
							md={3}
							lg={3}
							className="d-inline-flex m-3 h-100"
						>
							<Card className="resultCard">
								<Card.Img
									variant="top"
									src={park.images[0].url}
									href={park.url}

								/>
								<Card.Body>
									<a href="/parksInfoPage">  {park.name} </a>
									<p>{park.description}</p>
									<a href={park.url}>Visit Park site</a>

								</Card.Body>
							</Card>
						</Col>
					);
        </div>
    )
        
    
}
