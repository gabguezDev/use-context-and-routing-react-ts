import "./App.css";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { routes } from "./routes/routes";
import { HomePage, AboutPage, LoginPage } from "./pages";
import { Navbar } from "./components";
import { ContextProvider } from "./context";

function App() {
	return (
		<ContextProvider >
			<div className="App">
				<h2>App Component - Layout</h2>
				<Navbar />
				<hr />

				<Routes>
					<Route path={routes.HOME} element={<HomePage />} />
					<Route path={routes.ABOUT} element={<AboutPage />} />
					<Route path={routes.LOGIN} element={<LoginPage />} />

					{/* Ruta que no exista */}
					<Route path={"/*"} element={<Navigate to={routes.HOME} />} />
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
