import React from 'react';
import './styles/weather.css';

const Weather = () => {
	return (
		<div>
			<h1>Weather</h1>
			<div className='container-weather'>
				<div className='temperature'>Temp</div>
				<div className='temperature'>Temp</div>
				<div className='temperature'>Temp</div>
			</div>
			<div className='container-table-weather'>
				<div className='table'>Table</div>
			</div>
		</div>
	);
};

export default Weather;
