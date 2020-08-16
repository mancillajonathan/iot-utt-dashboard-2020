import React from 'react';
import './styles/navLink.css';

const NavLinks = ({ iconName, text }) => {
	return (
		<div className='Nav-link'>
			<div className='container'>
				<i class={iconName}></i>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default NavLinks;
