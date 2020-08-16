import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import User from './pages/User';
import Weather from './pages/Weather';
import Charts from './pages/Charts';
import NotFound from './pages/NotFound';
function App() {
	return (
		<BrowserRouter>
			<SideNav>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/user' component={User} />
					<Route exact path='/weather' component={Weather} />
					<Route exact path='/charts' component={Charts} />
					<Route exact path='/404' component={NotFound} />
					<Redirect from='*' to='/404' />
				</Switch>
			</SideNav>
		</BrowserRouter>
	);
}

export default App;
