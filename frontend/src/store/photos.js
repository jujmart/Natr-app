import { csrfFetch } from "./csrf";

const GET_PHOTOS = "photos/GET_PHOTOS";

function getPhotos(photos) {
	return { type: GET_PHOTOS, photos };
}

export function getPhotosThunk() {
	return async function (dispatch) {
		const res = await csrfFetch("/api/photos");
		if (res.ok) {
			const { photos } = await res.json();
			dispatch(getPhotos(photos));
		}
	};
}

export default function photosReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		case GET_PHOTOS:
			return action.photos;
		default:
			return state;
	}
}
