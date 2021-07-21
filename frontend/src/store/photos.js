import { csrfFetch } from "./csrf";

const SET_PHOTOS = "photos/SET_PHOTOS";
const DELETE_PHOTO = "photos/DELETE_PHOTO";

function setPhotos(photos) {
	return { type: SET_PHOTOS, photos };
}

function deletePhoto(id) {
	return { type: DELETE_PHOTO, id };
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

export function deletePhotoThunk(id) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch(`/api/photos/${id}`, {
				method: "DELETE",
			});

			if (res.ok) {
				const { photo } = res.json();
				dispatch(deletePhoto(photo.id));
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
		case DELETE_PHOTO:
			const newDeleteState = state.filter(
				(photo) => photo.id !== action.id
			);
			return newDeleteState;
		default:
			return state;
	}
}
