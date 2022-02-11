import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from "./Components/Page2";
import Page1 from "./Components/Page1";
import AddContacts from "./Components/AddContacts";
import ViewContacts from "./Components/ViewContacts";
// import Demo from "./Components/demo";

function App() {
	return (
		<>
			{/* <Page1 /> */}
			<Router>
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/Page2" element={<Page2 />} />
					{/* <Route path="/" element={<ViewContacts />} /> */}
					{/* <Route path="/demo" element={<AddContacts />} /> */}

				</Routes>
			</Router>
		</>
	);
}

export default App;
