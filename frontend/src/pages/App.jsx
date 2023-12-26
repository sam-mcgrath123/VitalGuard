import React, {useEffect, useRef, useState} from 'react';
import Navbar from '../components/Navbar';
import {Route, Routes} from 'react-router-dom';
import DashboardPage from './DashboardPage';
import RoomPatPage from './RoomPatPage';

function App() {
	const navbarRef = useRef(null);
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setNavbarHeight(navbarRef.current?.clientHeight);
		}, 0);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="App app-container" style={{background: "#E5E5E5", height: '100vh', overflow: 'hidden'}}>
			<div ref={navbarRef}>
				<Navbar/>
			</div>
			<div className="container-fluid" style={{height: '100%'}}>
				<main style={{height: `calc(100vh - ${navbarHeight}px)`}}>
					<Routes>
						<Route path="/" element={<DashboardPage/>} />
						<Route path="/roompatients" element={<RoomPatPage/>}/>
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
