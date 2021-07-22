import { csrfFetch } from "./csrf";

const SET_COMMENTS = "/comments/SET_COMMENTS";

function setComments(comments) {
	return { type: SET_COMMENTS, comments };
}

export function setCommentsThunk(photoId) {
	return async function (dispatch) {
		const res = await csrfFetch(`/api/${photoId}/comments`);

		if (res.ok) {
			const { comments } = await res.json();
			dispatch(setComments(comments));
		}
	};
}

export default function commentsReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		case SET_COMMENTS:
			return action.comments;
		default:
			return state;
	}
}
