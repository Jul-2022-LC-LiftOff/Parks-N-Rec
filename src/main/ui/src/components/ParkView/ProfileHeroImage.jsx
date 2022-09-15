import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ProfileHeroImage({ parkInfo }) {
	return (
		<div
			className="bg-image "
			style={{
				backgroundImage: `url(${parkInfo?.images[0].url})`,
				height: "50vh",
				backgroundSize: "Cover",
			}}
		>
			<div
				className="mask bg-gradient"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", height: "50vh" }}
			>
				<div className="d-flex justify-content-center align-items-center bg-image h-100">
					<div className="text-white">
						<h1 className="mt-6 center">
							Welcome to beautiful <br />
							{parkInfo?.fullName}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
