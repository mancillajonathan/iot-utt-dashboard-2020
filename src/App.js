import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
	return (
		<BrowserRouter>
			<SideNav>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/404' component={NotFound} />
					<Redirect from='*' to='/404' />
				</Switch>
			</SideNav>
		</BrowserRouter>
	);
}

export default App;
