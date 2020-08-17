import React, { Fragment } from 'react';
import './styles/userProfile.css';

const UserProfile = () => {
	return (
		<Fragment>
			<div className='userProfile__container'>
				<div className='userProfile__image-container'>
					<img src='#' alt='' />
				</div>
				<div className='userProfile__title-container'>
					<h2>John Smith</h2>
					<p className='userProfile__job-title'>Frotend Developer</p>
				</div>
			</div>
			<div className='userProfile__buttons-container'>
				<div className='buttons'>
					<i class='fas fa-calendar-check'></i><span>Check dates</span>
				</div>
				<div className='buttons'>
					<i class='fas fa-user-plus'></i><span>New user</span>
				</div>
				<div className='buttons'>
					<i class='fas fa-tasks'></i><span>My tasks</span>
				</div>
			</div>
		</Fragment>
	);
};

export default UserProfile;
