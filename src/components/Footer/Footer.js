import React from 'react';
import './Footer.css';

const Footer = () => {
	return(
		<div className="wrapper"> 
        <footer className="mt-5 text-center text-small">
            <p className="mb-1">© 2019 Ali Hasanaj</p>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#test">Privacy</a></li>
                <li className="list-inline-item"><a href="#test">Terms</a></li>
                <li className="list-inline-item"><a href="#test">Support</a></li>
            </ul>
        </footer>
    </div>
	);
}

export default Footer;