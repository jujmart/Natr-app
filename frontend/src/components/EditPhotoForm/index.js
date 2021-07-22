import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

import { editPhotoThunk, setPhotosThunk } from "../../store/photos";

import "./EditPhotoForm.css";

export default function EditPhotoFormPage() {
	const [imageUrl, setImageUrl] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);
	const [backendErrors, setBackendErrors] = useState([]);
	const [currentPhoto, setCurrentPhoto] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((state) => state.session);
	const photos = useSelector((state) => state.photos);
	const { photoId } = useParams();

	async function handleSubmit(e) {
		e.preventDefault();

		let res = await dispatch(
			editPhotoThunk({
				imageUrl,
				title,
				content,
				photoId,
				userId: user.id,
				username: user.username,
			})
		);

		if (res.errors) {
			setBackendErrors(res.errors);
		} else {
			history.push(`/photos/${photoId}`);
		}
	}

	useEffect(() => {
		dispatch(setPhotosThunk());
	}, [dispatch]);

	useEffect(() => {
		const photo = photos.find((photo) => photo.id === +photoId);
		setCurrentPhoto(photo);
		setImageUrl(photo?.imageUrl);
		setTitle(photo?.title);
		setContent(photo?.content);
	}, [photos, photoId]);

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

	if (!currentPhoto || currentPhoto === {}) return null;

	if (currentPhoto?.userId && currentPhoto.userId !== user.id) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<div className="edit-form-div">
				<h2>Edit Image</h2>
				<form className="edit-form" onSubmit={handleSubmit}>
					<div>
						<label>
							Image Url:
							<input
								type="text"
								required
								className="edit-input"
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
								className="edit-input"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</label>
					</div>
					<div className="edit-textarea-div">
						<label className="edit-textarea-label">
							Description (optional):
						</label>
						<textarea
							className="edit-textarea"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</div>
					<button
						disabled={!!validationErrors.length || !imageUrl}
						className={
							!!validationErrors.length || !imageUrl
								? "edit-button-disabled"
								: "edit-button"
						}
					>
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
			<div className="edit-form-edited-image-div">
				<h3>The image you are editing:</h3>
				<div className="individual-photo-container">
					<div className="individual-photo-img-container">
						<img
							src={currentPhoto?.imageUrl}
							alt={currentPhoto?.title}
							className="individual-photo-img-small"
						/>
					</div>
					<div className="individual-photo-title">
						{currentPhoto?.title}
					</div>
					<div className="individual-photo-content">
						{currentPhoto?.content}
					</div>
				</div>
			</div>
		</>
	);
}
