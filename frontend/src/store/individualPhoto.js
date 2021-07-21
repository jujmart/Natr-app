import { csrfFetch } from "./csrf";

const GET_PHOTO_USER = "individualPhoto/GET_PHOTO_USER";

function setPhotoUser(user) {
	return { type: GET_PHOTO_USER, user };
}

export function setPhotoUserThunk(userId) {
	return async function (dispatch) {
		const res = await csrfFetch(`/api/users/${userId}`);
		if (res.ok) {
			const { user } = await res.json();
			dispatch(setPhotoUser(user));
		}
	};
}

export default function individualPhotoReducer(state = {}, action) {
	Object.freeze(state);
	switch (action.type) {
		case GET_PHOTO_USER:
			return { ...state, user: action.user };
		default:
			return state;
	}
}
