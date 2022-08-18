import React from "react";
import ParkList from "../components/ParkList";
import SearchForm from "../components/SearchForm";
import Login from "../pages/Login";
export default function Home() {
  return (
    <main>
      <SearchForm />
      <ParkList/>
    </main>
  );
}