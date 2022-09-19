import "./App.css";
import ParkProfile from "./components/ParkView/ParkProfile.jsx";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";

const App = () => {
	return (

		<div>
			<ParkProfile />
		<div className="container">
			<Header />
			<Homepage />
			<SearchByName />
		</div>
	);
}

export default App;
