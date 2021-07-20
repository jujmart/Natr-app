import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { setPhotoUserThunk } from "../../store/individualPhoto";
import { getPhotosThunk } from "../../store/photos";
import "./Photo.css";

export default function Photo() {
	const photos = useSelector((state) => state.photos);
	const { user } = useSelector((state) => state.individualPhoto);
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const [currentPhoto, setCurrentPhoto] = useState({});

	useEffect(() => {
		dispatch(getPhotosThunk());
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
			<div className="individual-photo-user">
				<div className="individual-photo-user-photo">
					<img src={user?.profilePhotoUrl} alt="Profile Pic" />
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
