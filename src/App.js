import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from "./Components/Page2";
import Page1 from "./Components/Page1";
import Demo from "./Components/demo";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/Page2" element={<Page2 />} />
					{/* <Route path="/demo" element={<Demo />} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
