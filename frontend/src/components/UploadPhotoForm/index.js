import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { uploadPhotoThunk } from "../../store/photos";
import "./UploadForm.css";

export default function UploadPhotoFormPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);
	const [backendErrors, setBackendErrors] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((state) => state.session);

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(
			uploadPhotoThunk({ imageUrl, title, content, userId: user.id })
		);

		if (res.errors) {
			setBackendErrors(res.errors);
		} else {
			history.push(`/photos/${res.id}`);
		}
	}

	// useEffect(() => {
	// 	let errors = [];
	// 	if (imageUrl) {
	// 		const extension3 = imageUrl.slice(imageUrl.length - 4);
	// 		const extension4 = imageUrl.slice(imageUrl.length - 5);
	// 		if (
	// 			extension3 !== ".jpg" &&
	// 			extension3 !== ".png" &&
	// 			extension4 !== ".jpeg"
	// 		) {
	// 			errors.push(
	// 				"Image Url must have a file format of .png, .jpg, or .jpeg"
	// 			);
	// 		}
	// 	}

	// 	setValidationErrors(errors);
	// }, [imageUrl]);

	return (
		<div className="upload-form-div">
			<h2>Upload Image</h2>
			<form className="upload-form" onSubmit={handleSubmit}>
				<div>
					<label>
						Image Url:
						<input
							type="text"
							required
							className="upload-input"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Title (optional):
						<input
							type="text"
							className="upload-input"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
				</div>
				<div className="upload-textarea-div">
					<label className="upload-textarea-label">
						Description (optional):
					</label>
					<textarea
						className="upload-textarea"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button
					disabled={!!validationErrors.length || !imageUrl}
					className={
						!!validationErrors.length || !imageUrl
							? "upload-button-disabled"
							: "upload-button"
					}
				>
					Upload
				</button>
			</form>
			<div>
				<ul className="upload-form-errors">
					{backendErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
					{validationErrors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
