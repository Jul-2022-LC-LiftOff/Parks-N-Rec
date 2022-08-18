import React from "react";
import { Link } from "react-router-dom";
export default function Park({ images, name, id, code, detaisl }) {
  return (
    <article className="park">
      <div className="img-container">
        <img src={images} alt={name} />
      </div>
      <div className="park-footer">
        <h3>{name}</h3>
        <h4>{code}</h4>
        <p>{detaisl}</p>
        <Link to={`/park/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}