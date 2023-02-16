import React from 'react';
import logo from '../../img/logo.png';
import './LogoSearch.scss';

import { UilSearch } from '@iconscout/react-unicons';

const LogoSearch = () => {
	return (
		<div className="LogoSearch">
			<img src={logo} alt="" />
			<div className="Search">
				<input type="text" placeholder="#Explore" />
				<div className="search-icon">
					<UilSearch />
				</div>
			</div>
		</div>
	);
};

export default LogoSearch;
