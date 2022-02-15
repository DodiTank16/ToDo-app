import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./Components/AddTask";
import ViewTask from "./Components/ViewTask";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<ViewTask />} />
					<Route path="/AddTask" element={<AddTask />} />
					<Route path="/AddTask/:id" element={<AddTask />} />

				</Routes>
			</Router>
		</>
	);
}

export default App;
