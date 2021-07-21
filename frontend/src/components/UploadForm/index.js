import { useState } from "react";

import "./UploadForm.css";

export default function UploadFormPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);

	return (
		<div className="upload-form-div">
			<h2>Upload Image</h2>
			<form className="upload-form">
				<div>
					<label>
						Image Url:
						<input type="text" required />
					</label>
				</div>
				<div>
					<label>
						Title (optional):
						<input type="text" />
					</label>
				</div>
				<div>
					<label>
						Description (optional):
						<textarea />
					</label>
				</div>
				<button disabled={!!validationErrors.length || !imageUrl}>
					Upload
				</button>
			</form>
		</div>
	);
}
