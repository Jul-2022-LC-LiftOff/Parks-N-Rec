import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchByName from "./components/SearchByName/SearchByName";
import ParkNotes from "./components/Notes/ParkNotes";
import { useState } from "react";
import "./App.css";
import './index.css';
import { Header } from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Login/Profile";
import Register from "./components/Login/Register";


const App = () => {

  const [userstate, setUserState] = useState({});


	const [notes, setNotes] = useState([]);


	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			text: text,
			date: date.toLocaleDateString(),
		};
		//spread operator (...) expands an array into its elements. Will create new array instead of updating old array
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	return (
		<div className="container">

        			 <Router>



                              <Routes>



                                                 <Route path="/">
                                                             <Route path="/login" element={<Login />} />
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

                              	 <Header />
                                                           			<ParkNotes notes={notes} handleAddNote={addNote} />
                                                           			<SearchByName />

                            </Router>



                      </div>





	);
};

export default App;
