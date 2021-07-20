import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPhotosThunk } from "../../store/photos";

export default function Photo() {
	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const [currentPhoto, setCurrentPhoto] = useState({});

	useEffect(() => {
		if (!photos.length) {
			dispatch(getPhotosThunk()).then(() => {
				let photo = photos.find((photo) => photoId === photo.id);
				console.log(photos);
				setCurrentPhoto(photo);
			});
		}

		let photo = photos.find((photo) => photoId === photo.id);
		console.log(photo);
		setCurrentPhoto(photo);
	}, [dispatch, photos, photoId]);

	return (
		<>
			<div>
				<img src={currentPhoto?.imageUrl} alt={currentPhoto?.title} />
			</div>
		</>
	);
}
