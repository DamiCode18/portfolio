import React from 'react';
import './Project.css';

const Project = () => {
	return (
		<section className='mx-auto text-center project'>
			<h1>Project</h1>
			<div className='row'>
				<div className='col-md-4 col-sm-6 col-xs-12'>
					<div className='card project-card'>
						<div className='card-body'>
							<p>Project1</p>
						</div>
					</div>
				</div>
				<div className='col-md-4 col-sm-6 col-xs-12'>
					<div className='card project-card'>
						<div className='card-body'>
							<p>Project2</p>
						</div>
					</div>
				</div>
				<div className='col-md-4 col-sm-6 col-xs-12'>
					<div className='card project-card'>
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
