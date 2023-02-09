import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import FollowersDetail from '../Followers/FollowersDetail';
import InfoCard from '../InfoCard/InfoCard';

import './ProfileLeft.css';
const ProfileLeft = () => {
	return (
		<div className="ProfileLeft">
			<LogoSearch />
			<InfoCard/>
			<FollowersDetail />
		</div>
	);
};

export default ProfileLeft;
