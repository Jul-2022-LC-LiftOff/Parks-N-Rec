import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
	return (
		<div style={{ display: "block", height: 50 }}>
			<Carousel className="carousel slides">
				<Carousel.Item
					interval={3000}
					className="carousel-inner img-responsive h-50 w-100"
				>
					<img
						className="d-block w-100 h-50"
						src="/nick-herasimenka-t-3SoodYnR4-unsplash.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item
					interval={3000}
					className="carousel-inner img-responsive h-50 w-100"
				>
					<img
						className="d-block h-50 w-100"
						src="/ben-stiefel-PtCmDqF8nXc-unsplash.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000} className="carousel-inner h-50 w-100">
					<img
						className="d-block w-100 h-100"
						src="/jerad-hill-qAl3UaSAeIs-unsplash.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
