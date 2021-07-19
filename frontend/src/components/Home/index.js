import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPhotosThunk } from "../../store/photos";
import "./Home.css";

export default function Home() {
	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPhotosThunk());
	}, [dispatch]);

	return (
		<>
			<div className="homepage-photo-container">
				{photos.map((photo) => (
					<div key={photo.id} className="homepage-photo">
						<Link to="/">
							<img
								src={photo.imageUrl}
								alt={photo.title}
								className="homepage-photo-img"
							/>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
