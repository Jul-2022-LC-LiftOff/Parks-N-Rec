import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import SearchByName from "./components/SearchByName/SearchByName";
import SearchByStatePage from "./components/SearchByStatePage/SearchByStatePage";
import "./App.css";
import { useState } from "react";
import { UserContext } from "./UserContext";



const App = () => {
 const [searchedState, setSearchedState] = useState("");
	return (
		<div>
			<Header />
			<div>
				<UserContext.Provider value={(searchedState, setSearchedState)}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/searchByState" element={<SearchByStatePage />} />
					<Route path="/searchByName" element={<SearchByName />} />g
				</Routes>
				</UserContext.Provider>
			</div>
		</div>
	);
};

export default App;
