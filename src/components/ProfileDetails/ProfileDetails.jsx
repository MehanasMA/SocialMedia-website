import React from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileDetails.css';

const ProfileDetails = () => {
	return (
		<div className="ProfileDetails">
			<div className="ProfileImages">
				<img src={Cover} alt="" />
				<img src={Profile} alt="" />
			</div>

			<div className="ProfileName">
				<span>Mehnaz M A</span>
				<span>Mern Developer</span>
			</div>
			<div className="followStatus">
				<hr />
				<div>
					<div className="follow">
						<span>3,330</span>
						<span>Followers</span>
					</div>
					<div className="vl" />
					<div className="follow">
						<span>333</span>
						<span>Following</span>
					</div>
				</div>
				<hr />
			</div>

			<span>
				My Profile
			</span>
		</div>
	);
};

export default ProfileDetails;
