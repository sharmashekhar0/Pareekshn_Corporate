import { Outlet } from "react-router";
import Login from "./components/Hackathon/Login";
import CompletedHackathon from "./components/Hackathon/CompletedHackathon";

function App() {
	return (
		<>
			<Outlet />
			{/* <CompletedHackathon /> */}
		</>
	);
}

export default App;
