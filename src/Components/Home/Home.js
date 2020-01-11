import React from 'react';
import './Home.css';
import About from '../About/About';
import Project from '../Project/Project';
const Home = () => {
	return (
		<div>
			<section className='home'>
				<div className='home_pic'>
					<div className='content'>
						<h1>Hello !!!</h1>
						<p>portfolio loading...</p>
					</div>
				</div>
			</section>
			<About />
			<Project />
		</div>
	);
};

export default Home;
