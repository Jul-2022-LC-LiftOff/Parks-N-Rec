import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ParkContext } from "../parkContext/ParkContext";
import { useContext } from "react";

export default function ProfileHeroImage({ parkInfo, parkCode, setParkCode } ) {
  const msg = useContext(ParkContext)
  return (
    <div
      className="bg-image "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
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
