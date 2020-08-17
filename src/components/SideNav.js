import React, { Fragment } from 'react';
import Menu from './Menu';

const SideNav = ({ children }) => {
	return (
		<Fragment>
			<Menu />
			{children}
		</Fragment>
	);
};

export default SideNav;
