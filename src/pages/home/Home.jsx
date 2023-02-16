import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import Profile from '../../components/profileSide/Profile';
import RightSide from '../../components/RightSide/RightSide';
import './Home.scss';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};


const Home = () => {
	return (
		    <Container>

		<div className="Home">
			<Profile />
			<PostSide />
			<RightSide />
		</div>
		    </Container>

	);
};

export default Home;
