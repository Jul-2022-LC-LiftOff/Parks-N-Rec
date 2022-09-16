import React from "react";

export default function LoadMoreButton({ isCompleted, loadMore }) {
	return (
		<div className="d-grid mt-3 mb-5">
			{isCompleted ? (
				<button
					onClick={loadMore}
					type="button"
					className="btn btn-danger disabled"
				>
					That's It
				</button>
			) : (
				<button onClick={loadMore} type="button" className="btn btn-danger">
					Load More +
				</button>
			)}
		</div>
	);
}
