import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink className="nav-link ms-sm-3 me-lg-5" to="/"><i className="bi bi-activity h3"></i></NavLink>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active me-lg-5">
							<NavLink className="nav-link" to="/">
								<p className="h5">Dashboard</p>
							</NavLink>
						</li>
						<li className="nav-item active me-lg-3">
							<NavLink className="nav-link" to="/">
								<p className="h5">Rooms & Patients</p>
							</NavLink>
						</li>
					</ul>
				</div>
				<form className="row ms-auto">
					<div className="col">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					</div>
					<div className="col-auto me-sm-2">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</div>
				</form>
			</nav>
		</div>
	);
}

export default Navbar;