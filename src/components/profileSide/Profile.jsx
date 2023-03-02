import React from 'react';
import FollowersDetail from '../Followers/FollowersDetail';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import './Profile.scss';

const Profile = () => {
	return (
		<div className="Profile">
			<LogoSearch />
			<ProfileDetails location="homepage" />
			<FollowersDetail />
		</div>
	);
};

export default Profile;
