import React from 'react';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import './Profile.scss';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

const Profile = () => {
	return (
		<div className="Profile">
			<ProfileLeft />

			<div className="Profile-center">
				<ProfileDetails />
				<PostSide />
			</div>
			<RightSide />
		</div>
	);
};

export default Profile;
