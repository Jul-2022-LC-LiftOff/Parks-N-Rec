import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function HeroImageAndSearch() {
  return (
    <div
      className="bg-image "
      style={{
        backgroundImage: "url('https://i.imgur.com/8IuucQZ.jpg')",
        height: 500
      }}
    >
      <div
        className="mask bg-gradient"
        style={{ backgroundColor: 'rgba(232, 236, 235, 0.2)', height: 500 }}
      >
        <div className="d-flex justify-content-center align-items-center bg-image h-100">
          <div className="text-white">
            <img
            	src="Artboard 9 copy 2.svg"
            	width="60"
            	height="30"
				className="d-inline-block align-top"
                 className="logotwo"
            	alt="React Bootstrap logo"
            	></img>
          </div>
        </div>
      </div>
    </div>
  );
}
