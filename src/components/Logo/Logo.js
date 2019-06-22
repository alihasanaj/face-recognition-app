import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return(
		<div className="m-5">
			<Tilt className="Tilt border border-primary " options={{ max : 55 }} style={{ height: 200, width: 200 }} >
				<div className="Tilt-inner pt-5"> <img src={brain} alt="brain" /> </div>
			</Tilt>
		</div>
	)
}

export default Logo;