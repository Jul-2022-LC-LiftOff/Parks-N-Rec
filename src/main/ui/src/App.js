import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import ParkProfile from "./components/ParkView/ParkProfile.jsx";
import Results from "./components/Header/Results.jsx";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";
import { UserContext } from "./UserContext";

const App = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <Header />
      <div>
        <UserContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/results" element={<Results />} />
            <Route path="/searchByName" element={<SearchByName />} />
            <Route path="/searchByState" element={<SearchByStatePage />} />
            <Route path="/parkprofile" element={<ParkProfile />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
