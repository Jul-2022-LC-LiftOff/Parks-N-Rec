import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Results from "./components/Header/Results.jsx";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";
import { ParkContext } from "./components/parkContext/ParkContext";
import ParksPage from "./components/ParkView/ParkProfile"
import { useState } from "react";


const App = () => {
    const [selectState, setSelect] = useState("");

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />

          
          <Route path="/searchByState" element={
            <ParkContext.Provider value={selectState}>
          <SearchByStatePage selectState={selectState} setSelect={setSelect} />
          </ParkContext.Provider>
          } 
          />


          <Route path="/parksInfoPage" element={
          <ParksPage />} />
         

          
          <Route path="/searchByName" element={<SearchByName />} />
          
        </Routes>
    </div>
  );
};

export default App;
