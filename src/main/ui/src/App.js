
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SinglePark from "./pages/SinglePark";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

import { useState } from "react";



function App() {

  const [userstate, setUserState] = useState({});


  return (




   <div className="App">
        <Router>

                         <Navbar />

          <Routes>

           <Route path="/">
                              <Route path="/" element={<Home />} />
                             </Route>
                             <Route path="/">
                                         <Route path="/login" element={<Login />} />
                                        </Route>

                              <Route path="/">
                                         <Route path="/" element={<Home />} />
                                        </Route>
            <Route
              path="/"
              element={
                userstate && userstate._id ? (
                  <Profile
                    setUserState={setUserState}
                    username={userstate.fname}
                  />
                ) : (
                  <Login setUserState={setUserState} />
                )
              }
            ></Route>
            <Route
              path="/login"
              element={<Login setUserState={setUserState} />}
            ></Route>
            <Route path="/signup" element={<Register />}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;


