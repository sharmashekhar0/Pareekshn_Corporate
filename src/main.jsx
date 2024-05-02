import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import CorporateHome from "./pages/CorporateHome.jsx";
import ForgetUsername from "./components/Hackathon/ForgetUsername.jsx";
import ForgetPassword from "./components/Hackathon/ForgetPassword.jsx";
import Login from "./components/Hackathon/Login.jsx";
import CorporateSignUp from "./components/Hackathon/CorporateSignUp.jsx";
import CorporateHackathonDashboard1 from "./components/Hackathon/CorporateHackathonDashboard1.jsx";
import HackathonDashboard from "./components/Hackathon/HackathonDashboard.jsx";
import CreateHackathon from "./components/Hackathon/CreateHackathon.jsx";
import CompletedHackathon from "./components/Hackathon/CompletedHackathon.jsx";
import DashboardCorporateProfile from "./components/Hackathon/DashboardCorporateProfile.jsx";
import RejectedHackathon from "./components/Hackathon/RejectedHackathon.jsx";
import PendingHackathon from "./components/Hackathon/PendingHackathon.jsx";
import NextHackathon from "./components/Hackathon/NextHackathon.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<CorporateHome />}>
				<Route path="/" element={<Login />}></Route>
				<Route path="/signup" element={<CorporateSignUp />}></Route>
				<Route
					path="/forget-username"
					element={<ForgetUsername />}
				></Route>
				<Route
					path="/forget-password"
					element={<ForgetPassword />}
				></Route>
			</Route>
			<Route
				path="/dashboard"
				element={<CorporateHackathonDashboard1 />}
			></Route>
			<Route
				path="/create-hackathon"
				element={<CreateHackathon />}
			></Route>
			<Route
				path="/hackathon-dashboard"
				element={<HackathonDashboard />}
			></Route>
			<Route
				path="/completed-hackathon"
				element={<CompletedHackathon />}
			></Route>
			<Route
				path="/corporate-profile"
				element={<DashboardCorporateProfile />}
			></Route>
			<Route
				path="/rejected-hackathon"
				element={<RejectedHackathon />}
			></Route>
			<Route
				path="/pending-hackathon"
				element={<PendingHackathon />}
			></Route>
			<Route path="/next-hackathon" element={<NextHackathon />}></Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
