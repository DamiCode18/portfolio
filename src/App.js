import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='*' exact component={NotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
