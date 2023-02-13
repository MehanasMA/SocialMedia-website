import React, { useState } from 'react';
import './Auth.scss';
import Logo from '../../img/logo.png';

const Auth = () => {
	const [ isSignup, setIsSignup ] = useState(true);

	const [ data, setData ] = useState({
		firstname: '',
		lastname: '',
		username: '',
		password: '',
		confirmpassword: ''
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		<div className="Auth">
			{/* left */}
			<div className="a-left">
				<img src={Logo} alt="" />
				<div className="webname">
					<h1>ChatBuddy</h1>
					<h6>Explore the ideas throghout the world</h6>
				</div>
			</div>
			{/* right */}
			<div className="a-right">
				<form className="infoForm authForm">
					<h3>{isSignup ? 'Sign up' : 'Log In'}</h3>

					{isSignup && (
						<div>
							<input
								type="text"
								placeholder="First Name"
								className="infoInput"
								name="firstname"
								onChange={handleChange}
							/>
							<input
								type="text"
								placeholder="Second Name"
								className="infoInput"
								name="secondname"
								onChange={handleChange}
							/>
						</div>
					)}
					<div>
						<input
							type="text"
							placeholder="Username"
							className="infoInput"
							name="username"
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Password"
							className="infoInput"
							name="password"
							onChange={handleChange}
						/>

						{isSignup && (
							<input
								type="password"
								placeholder="Confirm password"
								className="infoInput"
								name="confirmpassword"
								onChange={handleChange}
							/>
						)}
					</div>
					<div>
						<span
							style={{ fontSize: '12px', cursor: 'pointer' }}
							onClick={() => setIsSignup((prev) => !prev)}
						>
							{isSignup ? 'Already have an accont? LOGIN' : " Don't have an account Sign up"}
						</span>
					</div>
					<button className="button infoButton" type="submit">
						{isSignup ? 'Signup' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;
