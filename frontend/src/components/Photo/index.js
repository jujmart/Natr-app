import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import {
	deletePhotoThunk,
	setPhotoUserThunk,
} from "../../store/individualPhoto";
import { setPhotosThunk } from "../../store/photos";
import "./Photo.css";

export default function Photo() {
	const photos = useSelector((state) => state.photos);
	const { user } = useSelector((state) => state.individualPhoto);
	const sessionUser = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const [currentPhoto, setCurrentPhoto] = useState({});
	const [backendDeleteErrors, setBackendDeleteErrors] = useState([]);
	const history = useHistory();

	async function handleDelete() {
		let res = await dispatch(deletePhotoThunk(photoId));
		if (res) {
			setBackendDeleteErrors(res.errors);
		} else {
			history.push("/");
		}
	}

	useEffect(() => {
		dispatch(setPhotosThunk());
	}, [dispatch]);

	useEffect(() => {
		let photo = photos.find((photo) => +photoId === photo.id);
		setCurrentPhoto(photo);
	}, [dispatch, photos, photoId]);

	useEffect(() => {
		if (currentPhoto?.userId) {
			dispatch(setPhotoUserThunk(currentPhoto.userId));
		}
	}, [dispatch, currentPhoto]);

	return (
		<div className="individual-photo-container">
			<div className="individual-photo-img-container">
				<img
					src={currentPhoto?.imageUrl}
					alt={currentPhoto?.title}
					className="individual-photo-img"
				/>
			</div>
			{sessionUser &&
			(sessionUser.username === "Demo-lition" ||
				sessionUser.username === user?.username) ? (
				<div className="individual-photo-delete-container">
					<button
						className="individual-photo-delete-button"
						onClick={handleDelete}
					>
						Delete Image
					</button>
					{backendDeleteErrors.length ? (
						<div>
							<ul className="individual-photo-delete-errors">
								{backendDeleteErrors.map((error) => (
									<li key={error}>{error}</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
			) : null}
			<div className="individual-photo-user">
				<div className="individual-photo-user-photo-container">
					<img
						src={user?.profilePhotoUrl}
						alt="Profile Pic"
						className="individual-photo-user-photo"
					/>
				</div>
				<div className="individual-photo-user-username">
					{user?.username}
				</div>
			</div>
			<div className="individual-photo-title">{currentPhoto?.title}</div>
			<div className="individual-photo-content">
				{currentPhoto?.content}
			</div>
			<div className="individual-photo-comments-container"></div>
		</div>
	);
}
