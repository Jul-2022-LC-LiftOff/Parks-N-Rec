import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import { Route, Routes } from "react-router-dom"
import Results from "./components/Header/Results.jsx";
import { useState } from 'react';



const App = () => {
          const [state, setState] = useState('');
	return (
	  <>
        <Header />
           <div>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage /> }
                />
                <Route
                  path="/home"
                  element={<Homepage setState={setState} state={state} />}
                />
                <Route
                  path="/login"
                  element={ <Login /> }
                />
                <Route
                  path="/results"
                  element={ <Results state={state} />}
                />
              </Routes>
           </div>
	  </>

	);
};

export default App;
