import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className="h3 mb-2">
				{'This Magic Brain will detect faces in your pictures. Give it a try '}
			</p>
		
			<div className="shadow-strong p-4 rounded-lg col-lg-6 mx-auto">
				<div className="input-group col-lg-6 mx-auto">
					<input type="text" className="form-control" placeholder="URL" aria-label="URL" aria-describedby="basic-addon2" onChange={onInputChange} />
						<div className="input-group-append">
							<button className="btn btn-primary" type="submit" onClick={onButtonSubmit}>Detect</button>
						</div>
				</div>
			</div>
				
			

		</div>
	)
}

export default ImageLinkForm;