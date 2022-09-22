import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Results from "./components/Header/Results.jsx";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";
import ParkProfile from './components/ParkView/ParkProfile'
import { useState } from "react";
import { ParkContext } from "./components/parkContext/ParkContext";

const App = () => {
  const [select, setSelect] = useState("")
  return (
    <div>
      <Header />
      <div>
        
        <Routes>

          <Route path="/" element={
          <ParkContext.Provider value={select} >
          <Homepage select={select} setSelect={setSelect} />
          </ParkContext.Provider>
          }
          />

          <Route path="/home" element={<Homepage />} />


          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />
          <Route path="/searchByName" element={<SearchByName />} />


          <Route path="/searchByState" element={
          <ParkContext.Provider value={select} >
          <SearchByStatePage select={select}  />
          </ParkContext.Provider>
          } 
          />


          <Route path="/parkprofile" element={<ParkProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
