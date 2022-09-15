import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Header/Login.jsx";
import { Route, Routes } from "react-router-dom"
import Results from "./components/Header/Results.jsx";




const App = () => {

	return (
	  <div>
        <Header />

           <div>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage /> }
                />
                <Route
                  path="/home"
                  element={<Homepage  />}
                />
                <Route
                  path="/login"
                  element={ <Login /> }
                />
                <Route
                    path="/results"
                    element={ <Results />}
                />
              </Routes>
           </div>
	  </div>

	);
};

export default App;
