import React from 'react';


const Register = ({onRouteChange}) => {
	return(
	<div className="border rounded border-dark text-dark w-25 mx-auto p-5 CustomShadow text-black">
		<h1>Register</h1>
		<div className="form-group ">
			<label for="exampleInputEmail1">Name</label>
			<input type="text" className="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
		</div>
        <div className="form-group ">
			<label for="exampleInputEmail1">Email</label>
			<input type="email" className="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
		</div>
		<div className="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" className="form-control border-dark" id="exampleInputPassword1" placeholder="Password" />
		</div>
		<button  onClick={() => onRouteChange('home')} type="submit"className="btn btn-primary mb-4">Register</button>
	</div>
	);
}

export default Register;