import React from 'react';
import notFound from '../images/not-found-404.png';
import './styles/notFound.css';

const NotFound = () => {
	return (
		<div>
			<h1>This page is lost in space</h1>
			<img src={notFound} alt='space' className='notFound__image' />
		</div>
	);
};

export default NotFound;
