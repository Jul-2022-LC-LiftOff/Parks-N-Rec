import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ProfileHeroImage({parkData}) {
	return (
		<div
			className="bg-image "
			style={{
				backgroundImage: `url(${parkData.images.url})`,
				height: 500,
			}}
		>
			<div
				className="mask bg-gradient"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: 500 }}
			>
				<div className="d-flex justify-content-center align-items-center bg-image h-100">
					<div className="text-white">
						<h1 className="mb-3">Find Your Park</h1>
						{/* <SearchBar /> */}
						<a className="btn btn-outline-light btn-lg" href="#!" role="button">
							Search
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
