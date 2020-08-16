import React from 'react';
import './styles/menu.css';
import NavLink from './NavLinks';
import Button from './Button';

const Menu = () => {
	return (
		<div className='sidenav'>
			<Button iconName='fas fa-plus-circle' text='CTA Button' />
			<NavLink iconName='fas fa-th-large' text='Home' link='/' />
			<NavLink iconName='fas fa-user-circle' text='User' link='/user'/>
			<NavLink iconName='fas fa-tachometer-alt' text='Weather' link='/weather' />
			<NavLink iconName='fas fa-chart-pie' text='Charts' link='/charts' />
			<NavLink iconName='fas fa-info-circle' text='Help' link='/help' />
			<NavLink iconName='fas fa-sign-out-alt' text='Log Out' link='/log-out' />
		</div>
	);
};

export default Menu;
