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
				await dispatch(setPhotosThunk());
				return photo;
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
