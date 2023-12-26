import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<NavLink className="navbar-brand ms-sm-3 me-lg-5" to="/">
					<i className="bi bi-activity"></i>
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto">
						<li className="nav-item active me-lg-5">
							<NavLink className="nav-link" to="/">
								Dashboard
							</NavLink>
						</li>
						<li className="nav-item active me-lg-3">
							<NavLink className="nav-link" to="/">
								Rooms & Patients
							</NavLink>
						</li>
					</ul>
				</div>
				<form className="d-flex ms-auto">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-light me-2" type="submit">Search</button>
				</form>
			</nav>
		</div>
	);
}

export default Navbar;
