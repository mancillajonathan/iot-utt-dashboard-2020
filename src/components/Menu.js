import React from 'react';
import './styles/menu.css';
import NavLink from './NavLinks';
import Button from './Button';
import data from '../data.json';

const { navLinks } = data;

const Menu = () => {
	return (
		<div className='sidenav'>
			<Button iconName='fas fa-plus-circle' text='CTA Button' />
			{navLinks.map((link) => (
				<NavLink
					key={link.key}
					iconName={link.iconName}
					text={link.text}
					link={link.link}
				/>
			))}
		</div>
	);
};

export default Menu;
