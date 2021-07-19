import { csrfFetch } from "./csrf";

export function getPhotosThunk() {
	return async function (dispatch) {
		const res = await csrfFetch("");
	};
}

export default function photosReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		default:
			return state;
	}
}
