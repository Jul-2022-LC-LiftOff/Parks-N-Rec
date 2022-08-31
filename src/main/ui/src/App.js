import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchByName from "./components/SearchByName/SearchByName";
import ParkNotes from "./components/Notes/ParkNotes";
import { useState } from "react";
import "./App.css";
import './index.css';
import { Header } from "./components/Header/Header";
import SignUp from "./components/Login/SignUp";


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
        			<Header />
        			<ParkNotes notes={notes} handleAddNote={addNote} />
        			<SearchByName />

        		</div>



	);
};

export default App;
