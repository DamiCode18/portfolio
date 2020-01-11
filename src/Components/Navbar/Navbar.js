import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {
	return (
		<section className=''>
			<nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
				<a className='navbar-brand' href='/'>
					<img className='logo m-auto' src={logo} alt='logo' />
				</a>
				<button className='navbar-toggler' id='toggle' data-toggle='collapse' data-target='.navbar-collapse'>
					<span className='navbar-toggler-icon' id='icon' />
				</button>
				<div className='navbar-collapse collapse'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item m-auto active'>
							<Link className='nav-link' to='/'>
								<i className='fa fa-home mr-2' />Home<span className='sr-only' />
							</Link>
						</li>
						<li className='nav-item m-auto'>
							<Link className='nav-link' to='/About'>
								<i className='fas fa-image mr-2' />About
							</Link>
						</li>
						<li className='nav-item m-auto'>
							<Link className='nav-link' to='/Project'>
								<i className='fas fa-question mr-2' />Project
							</Link>
						</li>
						<li className='nav-item m-auto'>
							<Link className='nav-link' to='/Contact'>
								<i className='fas fa-phone mr-2' />Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
