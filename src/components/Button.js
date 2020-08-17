import React from 'react';
import './styles/button.css';

const Button = ({ iconName, text }) => {
	return (
		<div className='Nav-button'>
			<div className='container'>
				<i class={iconName}></i>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Button;
