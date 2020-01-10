import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<section className=''>
			<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
				<a className='navbar-brand' href='/'>
					<img className='logo rounded-circle m-auto' alt='logo' />
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
							<a className='' href='/'>
								<i className='fas fa-image mr-2' />Gallery
							</a>
						</li>
						<li className='nav-item'>
							<a className='' href='/'>
								<i className='fas fa-question mr-2' />About
							</a>
						</li>
						<li className='nav-item'>
							<a className='' href='/'>
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
