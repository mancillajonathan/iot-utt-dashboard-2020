import React, { Fragment } from 'react';
import './styles/userProfile.css';
import data from '../data.json';
import profile from '../images/ui_face.jpg';
const { userInfo } = data;

const UserProfile = () => {
	return (
		<Fragment>
			<div className='userProfile__container'>
				<div className='userProfile__image-container'>
					<img src={profile} alt='profile' />
				</div>
				<div className='userProfile__title-container'>
					<h2>{userInfo.name}</h2>
					<p className='userProfile__job-title'>
						{' '}
						{userInfo.role} <i class='fas fa-check-circle'></i>
					</p>
				</div>
			</div>
			<div className='userProfile__buttons-container'>
				<div className='buttons'>
					<i class='fas fa-calendar-check'></i>
					<span>Check dates</span>
				</div>
				<div className='buttons'>
					<i class='fas fa-user-plus'></i>
					<span>New user</span>
				</div>
				<div className='buttons'>
					<i class='fas fa-tasks'></i>
					<span>My tasks</span>
				</div>
			</div>
		</Fragment>
	);
};

export default UserProfile;
