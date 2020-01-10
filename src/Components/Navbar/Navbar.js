import React from 'react';
import './Navbar.css';
import logo from '../../Images/Screenshot from 2020-01-10 17-35-45.png';

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
						<li className='nav-item active'>
							<a className='nav-link' href='/'>
								<i className='fa fa-home mr-2' />Home<span className='sr-only' />
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/'
								id='navbarDropdown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								<i className='fas fa-archive mr-2' />Our Courses
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='/'>
									Basic Program
								</a>
								<a className='dropdown-item' href='/'>
									Intermediate Program
								</a>
								<a className='dropdown-item' href='/'>
									Advance Program
								</a>
							</div>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								<i className='fas fa-image mr-2' />Gallery
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								<i className='fas fa-question mr-2' />About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								<i className='fas fa-phone mr-2' />Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
