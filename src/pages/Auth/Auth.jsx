import React, { useState } from 'react';
import './Auth.scss';
import Logo from '../../img/logo.png';
import {useDispatch} from 'react-redux'
import { logIn, signUp } from '../../redux/actions/AuthAction';

const Auth = () => {
	const dispatch=useDispatch()
	const [ isSignup, setIsSignup ] = useState(true);
	const [ data, setData ] = useState({
		firstname: '',
		lastname: '',
		username: '',
		password: '',
		confirmpassword: ''
	});

	const [ confirmPass, setConfirmPass ] = useState(true);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			data.password===data.confirmpassword ? dispatch(signUp(data)) : setConfirmPass(false)
		}else{
			dispatch(logIn(data))
		}
	};

	const resetForm=()=>{
		setConfirmPass(true)
         
		setData({
		firstname: '',
		lastname: '',
		username: '',
		password: '',
		confirmpassword: ''
		})

	}

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
				<form className="infoForm authForm" onSubmit={handleSubmit}>
					<h3>{isSignup ? 'Sign up' : 'Log In'}</h3>

					{isSignup && (
						<div>
							<input
								type="text"
								placeholder="First Name"
								className="infoInput"
								name="firstname"
								onChange={handleChange}
								value={data.firstname}
							/>
							<input
								type="text"
								placeholder="Last Name"
								className="infoInput"
								name="lastname"
								onChange={handleChange}
								value={data.lastname}
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
							value={data.username}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Password"
							className="infoInput"
							name="password"
							onChange={handleChange}
							value={data.password}
						/>

						{isSignup && (
							<input
								type="password"
								placeholder="Confirm password"
								className="infoInput"
								name="confirmpassword"
								onChange={handleChange}
								value={data.confirmpassword}
							/>
						)}
					</div>
					<span
						style={{
							display: confirmPass ? 'none' : 'block',
							color: 'red',
							fontSize: '12px',
							alignSelf: 'flex-end',
							marginRight: ''
						}}
					>
						*Confirm password should be same
					</span>
					<div>
						<span
							style={{ fontSize: '12px', cursor: 'pointer' }}
							onClick={() => {setIsSignup((prev) => !prev);resetForm()}}
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
