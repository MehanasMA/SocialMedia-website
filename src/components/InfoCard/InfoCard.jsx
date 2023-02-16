import React, { useState } from 'react';
import './InfoCard.scss';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal.jsx/ProfileModal';

const InfoCard = () => {
	const [ modalOpened, setModalOpened ] = useState(false);
	return (
		<div className="InfoCard">
			<div className="infoHead">
				<h4>Your Info</h4>
				<UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
				<ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
			</div>
			<div className="info">
				<span>
					<b>Status</b>
				</span>
				<span> In Relationship</span>
			</div>
			<div className="info">
				<span>
					<b>Lives in</b>
				</span>
				<span> India</span>
			</div>
			<div className="info">
				<span>
					<b>Works at</b>
				</span>
				<span> Google</span>
			</div>

			<button className="button logout-button">Logout</button>
		</div>
	);
};

export default InfoCard;
