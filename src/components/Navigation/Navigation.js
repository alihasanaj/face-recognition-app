import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	
		if (isSignedIn) {
			return(
				<nav className="text-right m-4">
					<button onClick={() => onRouteChange('signout')} type="button" className="btn btn-outline-primary">
							Sign Out
					</button>
				</nav>
			);
		} else {
			return(
				<nav className="text-right m-4">
					<button onClick={() => onRouteChange('signin')} type="button" className="btn btn-outline-primary mr-2">
						Sign In
					</button>
					<button onClick={() => onRouteChange('register')} type="button" className="btn btn-outline-primary ">
						Register
					</button>
				</nav>
			);
		}
		
}

export default Navigation;