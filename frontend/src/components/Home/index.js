import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setPhotosThunk } from "../../store/photos";
import "./Home.css";

export default function Home() {
	const photos = useSelector((state) => state.photos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPhotosThunk());
	}, [dispatch]);

	return (
		<>
			<div className="homepage-container">
				<div className="homepage-photo-container">
					{photos.map((photo) => (
						<div key={photo.id} className="homepage-photo-div">
							<Link to={`/photos/${photo.id}`}>
								<img
									src={photo.imageUrl}
									alt={photo.title}
									className="homepage-photo-img"
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
