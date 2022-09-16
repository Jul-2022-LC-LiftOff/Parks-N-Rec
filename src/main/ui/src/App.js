import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";


const App = () => {


	return (
		<div className="container">
			<Header />
			<Homepage />
			<ParkNotes notes={notes} handleAddNote={addNote} />
		</div>
	);
};

export default App;
