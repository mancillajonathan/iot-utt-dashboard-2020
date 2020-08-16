import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navLink.css';

const NavLinks = ({ iconName, text, link }) => {
	return (
		<Link to={link}>
			<div className='Nav-link'>
				<div className='container'>
					<i class={iconName}></i>
					<p>{text}</p>
				</div>
			</div>
		</Link>
	);
};

export default NavLinks;
