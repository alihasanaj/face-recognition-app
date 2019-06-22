import React from 'react';
import './Signin.css'

const Signin = ({onRouteChange}) => {
	return(
	<div className="border rounded border-dark text-dark w-25 mx-auto p-5 CustomShadow text-black">
		<h1>Sign In</h1>
		<div className="form-group ">
			<label htmlFor="exampleInputEmail1">Email</label>
			<input type="email" className="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
		</div>
		<div className="form-group">
			<label htmlFor="exampleInputPassword1">Password</label>
			<input type="password" className="form-control border-dark" id="exampleInputPassword1" placeholder="Password" />
		</div>
		<button  
			type="submit"
			className="btn btn-primary mb-4"
			onClick={() => onRouteChange('home')}
		>Sign In
		</button>
		<div >
			Don't Have an Account? Register <button onClick={() => onRouteChange('register')} className="btn btn-link text-primary m-0 p-0 ">Here</button>
		</div>
		
	</div>
	);
}

export default Signin;