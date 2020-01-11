import React from 'react';
import './Project.css';

const Project = () => {
	return (
		<section className='text-center project'>
			<h1>Projects</h1>
			<div className='row m-auto'>
				<div className='m-auto col-md-4 col-sm-6 col-xs-12'>
					<div className='m-auto card project-card'>
						<div className='card-body'>
							<p>Project1</p>
						</div>
					</div>
				</div>
				<div className='m-auto col-md-4 col-sm-6 col-xs-12'>
					<div className='m-auto card project-card'>
						<div className='card-body'>
							<p>Project2</p>
						</div>
					</div>
				</div>
				<div className='m-auto col-md-4 col-sm-6 col-xs-12'>
					<div className='m-auto card project-card'>
						<div className='card-body'>
							<p>Project3</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
