import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active mx-2" : "nav-link mx-2"
								}
								to={routes.HOME}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active mx-2" : "nav-link mx-2"
								}
								to={routes.ABOUT}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active mx-2" : "nav-link mx-2"
								}
								to={routes.LOGIN}
							>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

{
	/* <>
			<Link to={routes.HOME} className="mx-1">
				Home
			</Link>
			<Link to={routes.ABOUT} className="mx-1">
				About
			</Link>
			<Link to={routes.LOGIN} className="mx-1">
				Login
			</Link>
		</> */
}
