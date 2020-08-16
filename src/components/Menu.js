import React from 'react';
import './styles/menu.css';
import NavLink from './NavLinks';
import Button from './Button';

const Menu = () => {
	return (
		<div className='sidenav'>
			<Button iconName='fas fa-plus-circle' text='CTA Button' />
			<NavLink iconName='fas fa-th-large' text='Home' />
			<NavLink iconName='fas fa-user-circle' text='User' />
			<NavLink iconName='fas fa-tachometer-alt' text='Weather' />
			<NavLink iconName='fas fa-chart-pie' text='Charts' />
			<NavLink iconName='fas fa-info-circle' text='Help' />
			<NavLink iconName='fas fa-sign-out-alt' text='Log Out' />
		</div>
	);
};

export default Menu;
