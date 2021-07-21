import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editPhotoThunk } from "../../store/photos";

import "./EditPhotoForm.css";

export default function EditPhotoFormPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);
	const [backendErrors, setBackendErrors] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((state) => state.session);
	const { photoId } = useParams();

	// let photo;

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(
			editPhotoThunk({ imageUrl, title, content, id: photoId })
		);

		if (res) {
			setBackendErrors(res.errors);
		} else {
			history.push(`/photos/${res.id}`);
		}
	}

	useEffect(() => {
		let errors = [];
		if (imageUrl) {
			let extension3 = imageUrl.slice(imageUrl.length - 4);
			let extension4 = imageUrl.slice(imageUrl.length - 5);
			if (
				extension3 !== ".jpg" &&
				extension3 !== ".png" &&
				extension4 !== ".jpeg"
			) {
				errors.push(
					"Image Url must have a file format of .png, .jpg, or .jpeg"
				);
			}
		}

		setValidationErrors(errors);
	}, [imageUrl]);

	// if (user.id !== )

	return (
		<div className="edit-form-div">
			<h2>Edit Image</h2>
			<form className="edit-form" onSubmit={handleSubmit}>
				<div>
					<label>
						Image Url:
						<input
							type="text"
							required
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
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Description (optional):
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</label>
				</div>
				<button disabled={!!validationErrors.length || !imageUrl}>
					Update
				</button>
			</form>
			<div>
				<ul className="edit-form-errors">
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
