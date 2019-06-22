import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, myImageRef, box}) => {
	return(
		<div className="mt-5">
			<div className="container" >
					<img alt=""  id='inputImage' src={imageURL} ref={myImageRef}  width="500px" height="auto" />
					<div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;