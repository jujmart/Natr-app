import { csrfFetch } from "./csrf";

const SET_PHOTOS = "photos/SET_PHOTOS";

function setPhotos(photos) {
	return { type: SET_PHOTOS, photos };
}

export function setPhotosThunk() {
	return async function (dispatch) {
		const res = await csrfFetch("/api/photos");
		if (res.ok) {
			const { photos } = await res.json();
			dispatch(setPhotos(photos));
		}
	};
}

export function uploadPhotoThunk(image) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch("/api/photos", {
				method: "POST",
				body: JSON.stringify(image),
			});
			if (res.ok) {
				const { photo } = await res.json();
				return photo;
			}
		} catch (err) {
			return err.json();
		}
	};
}

export function deletePhotoThunk(id) {
	return async function (dispatch) {
		try {
			await csrfFetch(`/api/photos/${id}`, {
				method: "DELETE",
			});
		} catch (err) {
			return err.json();
		}
	};
}

export function editPhotoThunk(image) {
	return async function (dispatch) {
		try {
			const { imageUrl, title, content, photoId, userId, username } =
				image;
			const res = await csrfFetch(`/api/photos/${photoId}`, {
				method: "PUT",
				body: JSON.stringify({
					imageUrl,
					title,
					content,
					userId,
					username,
				}),
			});

			if (res.ok) {
				const errors = await res.json();
				return { errors };
			}
		} catch (err) {
			return err.json();
		}
	};
}

export default function photosReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		case SET_PHOTOS:
			return action.photos;
		default:
			return state;
	}
}
