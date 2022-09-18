import SearchByName from "./components/SearchByName/SearchByName";
import ParkNotes from "./components/Notes/ParkNotes";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import UserLanding from "./components/UserLanding/UserLanding";

const App = () => {
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

			<UserLanding />
		</div>
	);
};

export default App;
