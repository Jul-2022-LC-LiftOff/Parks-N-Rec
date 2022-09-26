import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function HeroImageAndSearch() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("../searchByName");
  };

  return (
    <div
      className="bg-image "
      style={{
        backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')",
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
            <button
              className="btn btn-outline-light btn-lg"
              role="button"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
