import { csrfFetch } from "./csrf";

const SET_COMMENTS = "/comments/SET_COMMENTS";
const ADD_COMMENT = "/comments/ADD_COMMENT";
const UNSET_COMMENTS = "/comments/UNSET_COMMENTS";

function setComments(comments) {
	return { type: SET_COMMENTS, comments };
}

function addComment(comment) {
	return { type: ADD_COMMENT, comment };
}

export function unsetComments() {
	return { type: UNSET_COMMENTS };
}

export function setCommentsThunk(imageId) {
	return async function (dispatch) {
		const res = await csrfFetch(`/api/comments`, {
			method: "PATCH",
			body: JSON.stringify({ imageId }),
		});

		if (res.ok) {
			const { comments } = await res.json();
			dispatch(setComments(comments));
		}
	};
}

export function addCommentThunk(comment) {
	return async function (dispatch) {
		try {
			const res = await csrfFetch(`/api/comments`, {
				method: "POST",
				body: JSON.stringify(comment),
			});

			if (res.ok) {
				const { newComment } = await res.json();
				dispatch(addComment(newComment));
			}
		} catch (err) {
			return err.json();
		}
	};
}

export default function commentsReducer(state = [], action) {
	Object.freeze(state);
	switch (action.type) {
		case SET_COMMENTS:
			return action.comments;
		case ADD_COMMENT:
			return [...state, action.comment];
		case UNSET_COMMENTS:
			return [];
		default:
			return state;
	}
}
