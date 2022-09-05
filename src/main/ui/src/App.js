import SearchByName from "./components/SearchByName/SearchByName";
import ParkNotes from "./components/Notes/ParkNotes";
import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header/Header";

const App = () => {
	const [notes, setNotes] = useState([]);
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			text: text,
			date: date.toLocaleDateString(),
		};
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
