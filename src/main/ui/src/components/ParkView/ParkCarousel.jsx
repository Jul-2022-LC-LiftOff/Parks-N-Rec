import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ParkInfo.css";

export function ParkCarousel({ parkInfo }) {
	return (
		<Carousel fade className="carousel">
			{parkInfo.images?.map((image, key) => {
				return (
					<div key={key}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={image.url}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</div>
				);
			})}
		</Carousel>
	);
}
