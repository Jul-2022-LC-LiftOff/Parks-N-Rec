import SearchByName from "./components/SearchByName/SearchByName";
import ParkNotes from "./components/Notes/ParkNotes";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import { Route, Routes } from "react-router-dom"
import Results from "./components/Header/Results.jsx";



const App = () => {

	return (
	  <>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/home" element={ <Homepage /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/results" element={ <Results /> }  />
          </Routes>
	    </div>
	  </>

	);
};

export default App;
