import "./App.css";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";

const App = () => {
	return (
		<div>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/searchByName" element={<SearchByName />} />
					<Route path="/searchByState" element={<SearchByStatePage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
