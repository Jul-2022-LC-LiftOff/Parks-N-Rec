import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import About from "./components/Header/About";
import Homepage from "./components/Homepage/Homepage";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";
import "./App.css";



const App = () => {
	return (
		<div>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/searchByName" element={<SearchByName />}/>
					<Route path="/searchByState" element={<SearchByStatePage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
