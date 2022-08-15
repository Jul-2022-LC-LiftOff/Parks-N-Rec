import React from "react";
import Park from "./Park";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function ParkList() {
  const { parks, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (parks.length < 1) {
    return (
      <h2 className="section-title">no Park matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">parks</h2>
      <div className="parks-center">
        {parks.map((item) => {
          return <Park key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}